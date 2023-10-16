/// Generated by terra, DO NOT MODIFY BY HAND.

import * as NATIVE_RTC from '@iris/native-rtc-binding';
import { ApiParam, CallApiReturnType } from 'iris-web-core';

import { IRtcEngineDispatch } from '../binding/IAgoraRtcEngineDispatch';

import { IrisRtcEngine } from '../engine/IrisRtcEngine';
import { IRtcEngineImpl } from '../impl/IAgoraRtcEngineImpl';

export interface IRtcEngineExtensions extends NATIVE_RTC.IRtcEngine {
  setAppType(appType: number): CallApiReturnType;
}

export class RtcEngineDispatchExtensions extends IRtcEngineDispatch {
  constructor(engine: IrisRtcEngine) {
    super(engine);
    this._impl = new IRtcEngineImpl(engine);
  }

  setAppType(apiParam: ApiParam): CallApiReturnType {
    let obj = JSON.parse(apiParam.data) as any;
    let appType = obj.appType;
    if (appType === undefined) throw 'appType is undefined';

    return this._impl.setAppType(appType);
  }
}