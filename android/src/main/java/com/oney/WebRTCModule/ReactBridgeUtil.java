package com.oney.WebRTCModule;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;

public class ReactBridgeUtil {

    public static String getMapStrValue(ReadableMap map, String key) {
        ReadableType type = map.getType(key);
        switch (type) {
            case Boolean:
                return String.valueOf(map.getBoolean(key));
            //case Number:
            //    return String.valueOf(map.getInt(key));
            case Number:
                return String.valueOf(map.getDouble(key));
            case String:
                return map.getString(key);
            default:
                return null;
        }
    }
}