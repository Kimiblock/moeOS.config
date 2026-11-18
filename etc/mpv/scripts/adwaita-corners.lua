-- 15px libadwaita corners
local mp = require 'mp'
local RADIUS = 15

local function update()
    if not mp.get_property_native('vo-configured', false) then return end

    local d = mp.get_property_native('osd-dimensions')
    local video = mp.get_property_native('video-params')
    if not video or not d or d.w < 2 or d.h < 2
        or mp.get_property_native('fullscreen', false)
        or mp.get_property_native('window-maximized', false) then
        mp.set_property_number('corner-rounding', 0)
        mp.set_property('background-color', '#FF000000')
        return
    end

    local w = d.w - (d.ml or 0) - (d.mr or 0)
    local h = d.h - (d.mt or 0) - (d.mb or 0)
    if w < 2 or h < 2 then return end

    local scale = mp.get_property_number('display-hidpi-scale', 1) or 1
    mp.set_property_number('corner-rounding', 2 * RADIUS * scale / math.min(w, h))
    mp.set_property('background-color', '#00000000')
end

for _, prop in ipairs({
    'osd-dimensions',
    'display-hidpi-scale',
    'fullscreen',
    'window-maximized',
    'video-params',
}) do
    mp.observe_property(prop, 'native', update)
end

mp.register_event('vo-configured', update)
mp.register_event('file-loaded', update)
