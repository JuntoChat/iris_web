import * as NATIVE_RTC from '@iris/native-rtc';
import {
  ICameraVideoTrack,
  ILocalTrack,
  IMicrophoneAudioTrack,
  ITrack,
} from 'agora-rtc-sdk-ng';
import { CallIrisApiResult } from 'iris-web-core';

import { IrisRtcEngine } from '../engine/IrisRtcEngine';

import { AgoraConsole } from '../util/AgoraConsole';

export class TrackHelper {
  _engine: IrisRtcEngine;
  constructor(engine: IrisRtcEngine) {
    this._engine = engine;
  }

  private async waitForHtmlElement(elementId: string): Promise<boolean> {
    // Check for the HTML element by ID every 100ms for up to 5 seconds
    const checkInterval = 100; // in milliseconds
    const timeout = 5000; // total timeout in milliseconds

    for (let elapsed = 0; elapsed < timeout; elapsed += checkInterval) {
      const element = document.getElementById(elementId);
      if (element !== null) {
        return true;
      }
      await new Promise((resolve) => setTimeout(resolve, checkInterval));
    }

    console.warn(`Warning: HTML element with ID "${elementId}" not found.`);
    return false;
  }

  public async play(track: ITrack, element?: string): Promise<void> {
    try {
      if (element !== undefined) {
        const elementIsPresent = await this.waitForHtmlElement(element);
        if (!elementIsPresent) {
          throw new Error(`HTML element with ID "${element}" not found.`);
        }
      }

      track?.play(element);
    } catch (e) {
      AgoraConsole.error(e);
      Promise.resolve(
        new CallIrisApiResult(-NATIVE_RTC.ERROR_CODE_TYPE.ERR_FAILED, e)
      );
      throw e;
    }
  }

  public stop(track: ITrack): void {
    try {
      track?.stop();
    } catch (e) {
      AgoraConsole.error(e);
      Promise.resolve(
        new CallIrisApiResult(-NATIVE_RTC.ERROR_CODE_TYPE.ERR_FAILED, e)
      );
      throw e;
    }
  }

  public async setEnabled(track: ILocalTrack, enabled: boolean): Promise<void> {
    try {
      await track?.setEnabled(enabled);
    } catch (e) {
      AgoraConsole.error(e);
      Promise.resolve(
        new CallIrisApiResult(-NATIVE_RTC.ERROR_CODE_TYPE.ERR_FAILED, e)
      );
      throw e;
    }
  }
  public async setMuted(track: ILocalTrack, enabled: boolean): Promise<void> {
    try {
      if (track?.enabled) {
        await track?.setMuted(enabled);
      }
    } catch (e) {
      AgoraConsole.error(e);
      Promise.resolve(
        new CallIrisApiResult(-NATIVE_RTC.ERROR_CODE_TYPE.ERR_FAILED, e)
      );
      throw e;
    }
  }
  public async setDevice(
    track: ICameraVideoTrack,
    deviceId: string
  ): Promise<void> {
    try {
      await track?.setDevice(deviceId);
    } catch (e) {
      AgoraConsole.error(e);
      Promise.resolve(
        new CallIrisApiResult(-NATIVE_RTC.ERROR_CODE_TYPE.ERR_FAILED, e)
      );
      throw e;
    }
  }

  public async setRecordingDevice(
    track: IMicrophoneAudioTrack,
    deviceId: string
  ): Promise<void> {
    try {
      await track?.setDevice(deviceId);
    } catch (e) {
      AgoraConsole.error(e);
      Promise.resolve(
        new CallIrisApiResult(-NATIVE_RTC.ERROR_CODE_TYPE.ERR_FAILED, e)
      );
      throw e;
    }
  }
}
