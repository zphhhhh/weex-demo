package com.zphhhhh.weexdemo;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;

/**
 * Created by zph on 2017/7/30.
 */

public class WXApplication extends Application {

    private static WXApplication wxApplication = null;

    @Override
    public void onCreate() {
        super.onCreate();
        wxApplication = this;
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this, config);
    }

    public static WXApplication getApplication() {
        return wxApplication;
    }
}
