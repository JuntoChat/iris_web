/// Generated by terra, DO NOT MODIFY BY HAND.

import { CallApiReturnType } from 'iris-web-core';

import { EncodedVideoFrameInfo } from './AgoraBase';

export enum VIDEO_SOURCE_TYPE {
  VIDEO_SOURCE_CAMERA_PRIMARY = 0,
  VIDEO_SOURCE_CAMERA = 0,
  VIDEO_SOURCE_CAMERA_SECONDARY = 1,
  VIDEO_SOURCE_SCREEN_PRIMARY = 2,
  VIDEO_SOURCE_SCREEN = 2,
  VIDEO_SOURCE_SCREEN_SECONDARY = 3,
  VIDEO_SOURCE_CUSTOM = 4,
  VIDEO_SOURCE_MEDIA_PLAYER = 5,
  VIDEO_SOURCE_RTC_IMAGE_PNG = 6,
  VIDEO_SOURCE_RTC_IMAGE_JPEG = 7,
  VIDEO_SOURCE_RTC_IMAGE_GIF = 8,
  VIDEO_SOURCE_REMOTE = 9,
  VIDEO_SOURCE_TRANSCODED = 10,
  VIDEO_SOURCE_CAMERA_THIRD = 11,
  VIDEO_SOURCE_CAMERA_FOURTH = 12,
  VIDEO_SOURCE_SCREEN_THIRD = 13,
  VIDEO_SOURCE_SCREEN_FOURTH = 14,
  VIDEO_SOURCE_UNKNOWN = 100,
}

export enum AudioRoute {
  ROUTE_DEFAULT = -1,
  ROUTE_HEADSET = 0,
  ROUTE_EARPIECE = 1,
  ROUTE_HEADSETNOMIC = 2,
  ROUTE_SPEAKERPHONE = 3,
  ROUTE_LOUDSPEAKER = 4,
  ROUTE_BLUETOOTH_DEVICE_HFP = 5,
  ROUTE_USB = 6,
  ROUTE_HDMI = 7,
  ROUTE_DISPLAYPORT = 8,
  ROUTE_AIRPLAY = 9,
  ROUTE_BLUETOOTH_DEVICE_A2DP = 10,
}

export enum BYTES_PER_SAMPLE {
  TWO_BYTES_PER_SAMPLE = 2,
}

export class AudioParameters {
  sample_rate?: number;

  channels?: number;

  frames_per_buffer?: number;
}

export enum RAW_AUDIO_FRAME_OP_MODE_TYPE {
  RAW_AUDIO_FRAME_OP_MODE_READ_ONLY = 0,
  RAW_AUDIO_FRAME_OP_MODE_READ_WRITE = 2,
}

export enum MEDIA_SOURCE_TYPE {
  AUDIO_PLAYOUT_SOURCE = 0,
  AUDIO_RECORDING_SOURCE = 1,
  PRIMARY_CAMERA_SOURCE = 2,
  SECONDARY_CAMERA_SOURCE = 3,
  PRIMARY_SCREEN_SOURCE = 4,
  SECONDARY_SCREEN_SOURCE = 5,
  CUSTOM_VIDEO_SOURCE = 6,
  MEDIA_PLAYER_SOURCE = 7,
  RTC_IMAGE_PNG_SOURCE = 8,
  RTC_IMAGE_JPEG_SOURCE = 9,
  RTC_IMAGE_GIF_SOURCE = 10,
  REMOTE_VIDEO_SOURCE = 11,
  TRANSCODED_VIDEO_SOURCE = 12,
  UNKNOWN_MEDIA_SOURCE = 100,
}

export enum CONTENT_INSPECT_RESULT {
  CONTENT_INSPECT_NEUTRAL = 1,
  CONTENT_INSPECT_SEXY = 2,
  CONTENT_INSPECT_PORN = 3,
}

export enum CONTENT_INSPECT_TYPE {
  CONTENT_INSPECT_INVALID = 0,
  CONTENT_INSPECT_MODERATION = 1,
  CONTENT_INSPECT_SUPERVISION = 2,
  CONTENT_INSPECT_IMAGE_MODERATION = 3,
}

export class ContentInspectModule {
  type?: CONTENT_INSPECT_TYPE;

  interval?: number;
}

export class ContentInspectConfig {
  extraInfo?: string;

  serverConfig?: string;

  modules?: ContentInspectModule[];

  moduleCount?: number;
}

export class PacketOptions {
  timestamp?: number;

  audioLevelIndication?: number;
}

export class AudioEncodedFrameInfo {
  sendTs?: number;

  codec?: number;
}

export class AudioPcmFrame {
  capture_timestamp?: number;

  samples_per_channel_?: number;

  sample_rate_hz_?: number;

  num_channels_?: number;

  bytes_per_sample?: BYTES_PER_SAMPLE;

  data_?: number[];
}

export enum AUDIO_DUAL_MONO_MODE {
  AUDIO_DUAL_MONO_STEREO = 0,
  AUDIO_DUAL_MONO_L = 1,
  AUDIO_DUAL_MONO_R = 2,
  AUDIO_DUAL_MONO_MIX = 3,
}

export enum VIDEO_PIXEL_FORMAT {
  VIDEO_PIXEL_DEFAULT = 0,
  VIDEO_PIXEL_I420 = 1,
  VIDEO_PIXEL_BGRA = 2,
  VIDEO_PIXEL_NV21 = 3,
  VIDEO_PIXEL_RGBA = 4,
  VIDEO_PIXEL_NV12 = 8,
  VIDEO_TEXTURE_2D = 10,
  VIDEO_TEXTURE_OES = 11,
  VIDEO_CVPIXEL_NV12 = 12,
  VIDEO_CVPIXEL_I420 = 13,
  VIDEO_CVPIXEL_BGRA = 14,
  VIDEO_PIXEL_I422 = 16,
  VIDEO_TEXTURE_ID3D11TEXTURE2D = 17,
}

export enum RENDER_MODE_TYPE {
  RENDER_MODE_HIDDEN = 1,
  RENDER_MODE_FIT = 2,
  RENDER_MODE_ADAPTIVE = 3,
}

export enum CAMERA_VIDEO_SOURCE_TYPE {
  CAMERA_SOURCE_FRONT = 0,
  CAMERA_SOURCE_BACK = 1,
  VIDEO_SOURCE_UNSPECIFIED = 2,
}

export enum META_INFO_KEY {
  KEY_FACE_CAPTURE = 0,
}

export interface IVideoFrameMetaInfo {
  getMetaInfoStr_c81192f(key: META_INFO_KEY): CallApiReturnType;
}

export enum EGL_CONTEXT_TYPE {
  EGL_CONTEXT10 = 0,
  EGL_CONTEXT14 = 1,
}

export enum VIDEO_BUFFER_TYPE {
  VIDEO_BUFFER_RAW_DATA = 1,
  VIDEO_BUFFER_ARRAY = 2,
  VIDEO_BUFFER_TEXTURE = 3,
}

export class ExternalVideoFrame {
  type?: VIDEO_BUFFER_TYPE;

  format?: VIDEO_PIXEL_FORMAT;

  buffer?: Uint8Array;

  stride?: number;

  height?: number;

  cropLeft?: number;

  cropTop?: number;

  cropRight?: number;

  cropBottom?: number;

  rotation?: number;

  timestamp?: number;

  eglType?: EGL_CONTEXT_TYPE;

  textureId?: number;

  matrix?: number[];

  metadata_buffer?: Uint8Array;

  metadata_size?: number;

  alphaBuffer?: Uint8Array;

  texture_slice_index?: number;
}

export class VideoFrame {
  type?: VIDEO_PIXEL_FORMAT;

  width?: number;

  height?: number;

  yStride?: number;

  uStride?: number;

  vStride?: number;

  yBuffer?: Uint8Array;

  uBuffer?: Uint8Array;

  vBuffer?: Uint8Array;

  rotation?: number;

  renderTimeMs?: number;

  avsync_type?: number;

  metadata_buffer?: Uint8Array;

  metadata_size?: number;

  textureId?: number;

  matrix?: number[];

  alphaBuffer?: Uint8Array;

  pixelBuffer?: Uint8Array;

  metaInfo?: IVideoFrameMetaInfo;
}

export enum MEDIA_PLAYER_SOURCE_TYPE {
  MEDIA_PLAYER_SOURCE_DEFAULT = 0,
  MEDIA_PLAYER_SOURCE_FULL_FEATURED = 1,
  MEDIA_PLAYER_SOURCE_SIMPLE = 2,
}

export enum VIDEO_MODULE_POSITION {
  POSITION_POST_CAPTURER = 1,
  POSITION_PRE_RENDERER = 1,
  POSITION_PRE_ENCODER = 1,
  POSITION_POST_CAPTURER_ORIGIN = 1,
}

export interface IAudioPcmFrameSink {
  onFrame_95f515a(frame: AudioPcmFrame): void;
}

export enum AUDIO_FRAME_TYPE {
  FRAME_TYPE_PCM16 = 0,
}

export class AudioFrame {
  type?: AUDIO_FRAME_TYPE;

  samplesPerChannel?: number;

  bytesPerSample?: BYTES_PER_SAMPLE;

  channels?: number;

  samplesPerSec?: number;

  buffer?: Uint8Array;

  renderTimeMs?: number;

  avsync_type?: number;

  presentationMs?: number;

  audioTrackNumber?: number;
}

export enum AUDIO_FRAME_POSITION {
  AUDIO_FRAME_POSITION_NONE = 0,
  AUDIO_FRAME_POSITION_PLAYBACK = 1,
  AUDIO_FRAME_POSITION_RECORD = 2,
  AUDIO_FRAME_POSITION_MIXED = 4,
  AUDIO_FRAME_POSITION_BEFORE_MIXING = 8,
  AUDIO_FRAME_POSITION_EAR_MONITORING = 16,
}

export class AudioParams {
  sample_rate?: number;

  channels?: number;

  mode?: RAW_AUDIO_FRAME_OP_MODE_TYPE;

  samples_per_call?: number;
}

export interface IAudioFrameObserverBase {
  onRecordAudioFrame_4c8de15(channelId: string, audioFrame: AudioFrame): void;

  onPlaybackAudioFrame_4c8de15(channelId: string, audioFrame: AudioFrame): void;

  onMixedAudioFrame_4c8de15(channelId: string, audioFrame: AudioFrame): void;

  onEarMonitoringAudioFrame_5405a47(audioFrame: AudioFrame): void;
}

export interface IAudioFrameObserver extends IAudioFrameObserverBase {
  onPlaybackAudioFrameBeforeMixing_85ec0fc(
    channelId: string,
    uid: number,
    audioFrame: AudioFrame
  ): void;

  onRecordAudioFrame_4c8de15(channelId: string, audioFrame: AudioFrame): void;

  onPlaybackAudioFrame_4c8de15(channelId: string, audioFrame: AudioFrame): void;

  onMixedAudioFrame_4c8de15(channelId: string, audioFrame: AudioFrame): void;

  onEarMonitoringAudioFrame_5405a47(audioFrame: AudioFrame): void;
}

export class AudioSpectrumData {
  audioSpectrumData?: number[];

  dataLength?: number;
}

export class UserAudioSpectrumInfo {
  uid?: number;

  spectrumData?: AudioSpectrumData;
}

export interface IAudioSpectrumObserver {
  onLocalAudioSpectrum_5822fed(data: AudioSpectrumData): void;

  onRemoteAudioSpectrum_8ea2cde(
    spectrums: UserAudioSpectrumInfo[],
    spectrumNumber: number
  ): void;
}

export interface IVideoEncodedFrameObserver {
  onEncodedVideoFrameReceived_6922697(
    uid: number,
    imageBuffer: Uint8Array,
    length: number,
    videoEncodedFrameInfo: EncodedVideoFrameInfo
  ): void;
}

export enum VIDEO_FRAME_PROCESS_MODE {
  PROCESS_MODE_READ_ONLY = 0,
  PROCESS_MODE_READ_WRITE = 1,
}

export interface IVideoFrameObserver {
  onCaptureVideoFrame_1673590(
    sourceType: VIDEO_SOURCE_TYPE,
    videoFrame: VideoFrame
  ): void;

  onPreEncodeVideoFrame_1673590(
    sourceType: VIDEO_SOURCE_TYPE,
    videoFrame: VideoFrame
  ): void;

  onMediaPlayerVideoFrame_e648e2c(
    videoFrame: VideoFrame,
    mediaPlayerId: number
  ): void;

  onRenderVideoFrame_43dcf82(
    channelId: string,
    remoteUid: number,
    videoFrame: VideoFrame
  ): void;

  onTranscodedVideoFrame_27754d8(videoFrame: VideoFrame): void;
}

export enum EXTERNAL_VIDEO_SOURCE_TYPE {
  VIDEO_FRAME = 0,
  ENCODED_VIDEO_FRAME = 1,
}

export enum MediaRecorderContainerFormat {
  FORMAT_MP4 = 1,
}

export enum MediaRecorderStreamType {
  STREAM_TYPE_AUDIO = 1,
  STREAM_TYPE_VIDEO = 2,
  STREAM_TYPE_BOTH = 3,
}

export enum RecorderState {
  RECORDER_STATE_ERROR = -1,
  RECORDER_STATE_START = 2,
  RECORDER_STATE_STOP = 3,
}

export enum RecorderReasonCode {
  RECORDER_REASON_NONE = 0,
  RECORDER_REASON_WRITE_FAILED = 1,
  RECORDER_REASON_NO_STREAM = 2,
  RECORDER_REASON_OVER_MAX_DURATION = 3,
  RECORDER_REASON_CONFIG_CHANGED = 4,
}

export class MediaRecorderConfiguration {
  storagePath?: string;

  containerFormat?: MediaRecorderContainerFormat;

  streamType?: MediaRecorderStreamType;

  maxDurationMs?: number;

  recorderInfoUpdateInterval?: number;
}

export class RecorderInfo {
  fileName?: string;

  durationMs?: number;

  fileSize?: number;
}

export interface IMediaRecorderObserver {
  onRecorderStateChanged_c38849f(
    channelId: string,
    uid: number,
    state: RecorderState,
    reason: RecorderReasonCode
  ): void;

  onRecorderInfoUpdated_64fa74a(
    channelId: string,
    uid: number,
    info: RecorderInfo
  ): void;
}
