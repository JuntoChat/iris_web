/// Generated by terra, DO NOT MODIFY BY HAND.

import {
  ERROR_CODE_TYPE,
  IMediaPlayer,
  IMediaPlayerCacheManager,
} from '@iris/native-rtc';
import { ApiParam, CallApiReturnType } from 'iris-web-core';

import { IrisRtcEngine } from '../engine/IrisRtcEngine';
import { AgoraConsole } from '../util/AgoraConsole';

export class IMediaPlayerDispatch implements IMediaPlayer {
  _engine: IrisRtcEngine = null;

  constructor(engine: IrisRtcEngine) {
    this._engine = engine;
  }
  // @ts-ignore
  getMediaPlayerId(): CallApiReturnType {
    AgoraConsole.warn('getMediaPlayerId not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  open_e43f201(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('open_e43f201 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  openWithMediaSource_3c11499(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'openWithMediaSource_3c11499 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  play(): CallApiReturnType {
    AgoraConsole.warn('play not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  pause(): CallApiReturnType {
    AgoraConsole.warn('pause not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  stop(): CallApiReturnType {
    AgoraConsole.warn('stop not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  resume(): CallApiReturnType {
    AgoraConsole.warn('resume not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  seek_f631116(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('seek_f631116 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setAudioPitch_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('setAudioPitch_46f8ab7 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getDuration_b12f121(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('getDuration_b12f121 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPlayPosition_b12f121(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getPlayPosition_b12f121 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getStreamCount_b12f121(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('getStreamCount_b12f121 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getStreamInfo_0fa63fa(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('getStreamInfo_0fa63fa not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setLoopCount_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('setLoopCount_46f8ab7 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setPlaybackSpeed_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setPlaybackSpeed_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  selectAudioTrack_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'selectAudioTrack_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  selectMultiAudioTrack_4e92b3c(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'selectMultiAudioTrack_4e92b3c not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setPlayerOption_4d05d29(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setPlayerOption_4d05d29 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setPlayerOption_ccad422(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setPlayerOption_ccad422 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  takeScreenshot_3a2037f(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('takeScreenshot_3a2037f not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  selectInternalSubtitle_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'selectInternalSubtitle_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setExternalSubtitle_3a2037f(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setExternalSubtitle_3a2037f not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getState(): CallApiReturnType {
    AgoraConsole.warn('getState not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  mute_5039d15(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('mute_5039d15 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getMute_c93e9d4(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('getMute_c93e9d4 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  adjustPlayoutVolume_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'adjustPlayoutVolume_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPlayoutVolume_9cfaa7e(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getPlayoutVolume_9cfaa7e not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  adjustPublishSignalVolume_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'adjustPublishSignalVolume_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPublishSignalVolume_9cfaa7e(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'getPublishSignalVolume_9cfaa7e not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setView_cb1a81f(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('setView_cb1a81f not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setRenderMode_bedb5ae(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('setRenderMode_bedb5ae not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  registerPlayerSourceObserver_15621d7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'registerPlayerSourceObserver_15621d7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  unregisterPlayerSourceObserver_15621d7(
    apiParam: ApiParam
  ): CallApiReturnType {
    AgoraConsole.warn(
      'unregisterPlayerSourceObserver_15621d7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  registerAudioFrameObserver_89ab9b5(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'registerAudioFrameObserver_89ab9b5 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  registerAudioFrameObserver_a5b510b(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'registerAudioFrameObserver_a5b510b not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  unregisterAudioFrameObserver_89ab9b5(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'unregisterAudioFrameObserver_89ab9b5 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  registerVideoFrameObserver_833bd8d(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'registerVideoFrameObserver_833bd8d not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  unregisterVideoFrameObserver_5165d4c(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'unregisterVideoFrameObserver_5165d4c not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  registerMediaPlayerAudioSpectrumObserver_226bb48(
    apiParam: ApiParam
  ): CallApiReturnType {
    AgoraConsole.warn(
      'registerMediaPlayerAudioSpectrumObserver_226bb48 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  unregisterMediaPlayerAudioSpectrumObserver_09064ce(
    apiParam: ApiParam
  ): CallApiReturnType {
    AgoraConsole.warn(
      'unregisterMediaPlayerAudioSpectrumObserver_09064ce not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setAudioDualMonoMode_30c9672(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setAudioDualMonoMode_30c9672 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPlayerSdkVersion(): CallApiReturnType {
    AgoraConsole.warn('getPlayerSdkVersion not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getPlaySrc(): CallApiReturnType {
    AgoraConsole.warn('getPlaySrc not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  openWithAgoraCDNSrc_e43f201(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'openWithAgoraCDNSrc_e43f201 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getAgoraCDNLineCount(): CallApiReturnType {
    AgoraConsole.warn('getAgoraCDNLineCount not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  switchAgoraCDNLineByIndex_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'switchAgoraCDNLineByIndex_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getCurrentAgoraCDNIndex(): CallApiReturnType {
    AgoraConsole.warn(
      'getCurrentAgoraCDNIndex not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  enableAutoSwitchAgoraCDN_5039d15(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'enableAutoSwitchAgoraCDN_5039d15 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  renewAgoraCDNSrcToken_e43f201(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'renewAgoraCDNSrcToken_e43f201 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  switchAgoraCDNSrc_7a174df(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'switchAgoraCDNSrc_7a174df not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  switchSrc_7a174df(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('switchSrc_7a174df not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  preloadSrc_e43f201(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('preloadSrc_e43f201 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  playPreloadedSrc_3a2037f(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'playPreloadedSrc_3a2037f not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  unloadSrc_3a2037f(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('unloadSrc_3a2037f not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setSpatialAudioParams_5035667(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setSpatialAudioParams_5035667 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setSoundPositionParams_f282d50(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setSoundPositionParams_f282d50 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }
}

export class IMediaPlayerCacheManagerDispatch
  implements IMediaPlayerCacheManager {
  _engine: IrisRtcEngine = null;

  constructor(engine: IrisRtcEngine) {
    this._engine = engine;
  }
  // @ts-ignore
  removeAllCaches(): CallApiReturnType {
    AgoraConsole.warn('removeAllCaches not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  removeOldCache(): CallApiReturnType {
    AgoraConsole.warn('removeOldCache not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  removeCacheByUri_3a2037f(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'removeCacheByUri_3a2037f not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setCacheDir_3a2037f(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('setCacheDir_3a2037f not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setMaxCacheFileCount_46f8ab7(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setMaxCacheFileCount_46f8ab7 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  setMaxCacheFileSize_f631116(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'setMaxCacheFileSize_f631116 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  enableAutoRemoveCache_5039d15(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'enableAutoRemoveCache_5039d15 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getCacheDir_c9551e8(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('getCacheDir_c9551e8 not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getMaxCacheFileCount(): CallApiReturnType {
    AgoraConsole.warn('getMaxCacheFileCount not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getMaxCacheFileSize(): CallApiReturnType {
    AgoraConsole.warn('getMaxCacheFileSize not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  getCacheFileCount(): CallApiReturnType {
    AgoraConsole.warn('getCacheFileCount not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }
}
