/// Generated by terra, DO NOT MODIFY BY HAND.

import { ERROR_CODE_TYPE, IAudioDeviceManager } from '@iris/native-rtc';
import { ApiParam, CallApiReturnType } from 'iris-web-core';

import { IrisRtcEngine } from '../engine/IrisRtcEngine';
import { AgoraConsole } from '../util/AgoraConsole';

export class IAudioDeviceManagerDispatch implements IAudioDeviceManager {
  _engine: IrisRtcEngine = null;

  constructor(engine: IrisRtcEngine) {
    this._engine = engine;
  }
  // @ts-ignore
  enumeratePlaybackDevices(): CallApiReturnType {
    AgoraConsole.warn(
      'enumeratePlaybackDevices not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  enumerateRecordingDevices(): CallApiReturnType {
    AgoraConsole.warn(
      'enumerateRecordingDevices not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setPlaybackDevice_4ad5f6e(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setPlaybackDevice_4ad5f6e not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPlaybackDevice_73b9872(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getPlaybackDevice_73b9872 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPlaybackDeviceInfo_5540658(): CallApiReturnType {
    AgoraConsole.warn(
      'getPlaybackDeviceInfo_5540658 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setPlaybackDeviceVolume_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setPlaybackDeviceVolume_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPlaybackDeviceVolume_915cb25(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getPlaybackDeviceVolume_915cb25 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setRecordingDevice_4ad5f6e(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setRecordingDevice_4ad5f6e not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getRecordingDevice_73b9872(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getRecordingDevice_73b9872 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getRecordingDeviceInfo_5540658(): CallApiReturnType {
    AgoraConsole.warn(
      'getRecordingDeviceInfo_5540658 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setRecordingDeviceVolume_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setRecordingDeviceVolume_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getRecordingDeviceVolume_915cb25(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getRecordingDeviceVolume_915cb25 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setLoopbackDevice_4ad5f6e(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setLoopbackDevice_4ad5f6e not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getLoopbackDevice_73b9872(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getLoopbackDevice_73b9872 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setPlaybackDeviceMute_5039d15(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setPlaybackDeviceMute_5039d15 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPlaybackDeviceMute_d942327(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getPlaybackDeviceMute_d942327 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setRecordingDeviceMute_5039d15(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setRecordingDeviceMute_5039d15 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getRecordingDeviceMute_d942327(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getRecordingDeviceMute_d942327 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  startPlaybackDeviceTest_3a2037f(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'startPlaybackDeviceTest_3a2037f not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  stopPlaybackDeviceTest(): CallApiReturnType {
    AgoraConsole.warn('stopPlaybackDeviceTest not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  startRecordingDeviceTest_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'startRecordingDeviceTest_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  stopRecordingDeviceTest(): CallApiReturnType {
    AgoraConsole.warn(
      'stopRecordingDeviceTest not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  startAudioDeviceLoopbackTest_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'startAudioDeviceLoopbackTest_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  stopAudioDeviceLoopbackTest(): CallApiReturnType {
    AgoraConsole.warn(
      'stopAudioDeviceLoopbackTest not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  followSystemPlaybackDevice_5039d15(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'followSystemPlaybackDevice_5039d15 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  followSystemRecordingDevice_5039d15(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'followSystemRecordingDevice_5039d15 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  followSystemLoopbackDevice_5039d15(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'followSystemLoopbackDevice_5039d15 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  release(): CallApiReturnType {
    AgoraConsole.warn('release not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }
}
