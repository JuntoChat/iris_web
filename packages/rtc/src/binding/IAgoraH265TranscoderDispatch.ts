/// Generated by terra, DO NOT MODIFY BY HAND.

import {
  ERROR_CODE_TYPE,
  H265_TRANSCODE_RESULT,
  IH265Transcoder,
} from '@iris/native-rtc';
import { ApiParam, CallApiReturnType } from 'iris-web-core';

import { IrisRtcEngine } from '../engine/IrisRtcEngine';
import { AgoraConsole } from '../util/AgoraConsole';

export class IH265TranscoderObserver {
  _engine: IrisRtcEngine = null;

  constructor(engine: IrisRtcEngine) {
    this._engine = engine;
  }

  notifyEvent(param: ApiParam): void {
    this._engine.irisEventHandlerManager.notifyEvent('RtcEngine', param);
  }

  onEnableTranscode_6ba6646(result: H265_TRANSCODE_RESULT): void {
    AgoraConsole.warn(
      'onEnableTranscode_6ba6646 not supported in this platform!'
    );
    this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  onQueryChannel_31ba3df(
    result: H265_TRANSCODE_RESULT,
    originChannel: string,
    transcodeChannel: string
  ): void {
    AgoraConsole.warn('onQueryChannel_31ba3df not supported in this platform!');
    this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  onTriggerTranscode_6ba6646(result: H265_TRANSCODE_RESULT): void {
    AgoraConsole.warn(
      'onTriggerTranscode_6ba6646 not supported in this platform!'
    );
    this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }
}

export class IH265TranscoderDispatch implements IH265Transcoder {
  _engine: IrisRtcEngine = null;

  constructor(engine: IrisRtcEngine) {
    this._engine = engine;
  }
  // @ts-ignore
  enableTranscode_a0779eb(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'enableTranscode_a0779eb not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  queryChannel_a0779eb(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn('queryChannel_a0779eb not supported in this platform!');
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  triggerTranscode_a0779eb(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'triggerTranscode_a0779eb not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  registerTranscoderObserver_e1ee996(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'registerTranscoderObserver_e1ee996 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  // @ts-ignore
  unregisterTranscoderObserver_e1ee996(apiParam: ApiParam): CallApiReturnType {
    AgoraConsole.warn(
      'unregisterTranscoderObserver_e1ee996 not supported in this platform!'
    );
    return this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }
}
