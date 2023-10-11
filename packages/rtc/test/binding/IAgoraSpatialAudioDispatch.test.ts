/// Generated by terra, DO NOT MODIFY BY HAND.

import {
  CallIrisApiResult,
  EventParam,
  IrisApiEngine,
  IrisCore,
} from 'iris-web-core';

import { initIrisRtc } from '../../src/index';
import { IrisRtcEngine } from '../engine/IrisRtcEngine';

const bindingAPI = require('../../src/binding/IAgoraSpatialAudioDispatch');

let apiEnginePtr: IrisApiEngine;
let irisRtcEngine: IrisRtcEngine;
beforeAll(async () => {
  apiEnginePtr = IrisCore.createIrisApiEngine();
  initIrisRtc(apiEnginePtr);
  irisRtcEngine = apiEnginePtr['apiInterceptors'][0];
  irisRtcEngine.implHelper.createAudioTrack = jest.fn();
  let nParam = {
    context: 'test',
  };
  let apiParam = new EventParam(
    'RtcEngine_initialize',
    JSON.stringify(nParam),
    0,
    '',
    ['test'],
    [],
    1
  );
  await IrisCore.callIrisApi(apiEnginePtr, apiParam);
});

afterAll(() => {
  IrisCore.disposeIrisApiEngine(apiEnginePtr);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('IBaseSpatialAudioEngine', () => {
  test('release impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'release'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_release',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .release
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .release
    ).toBeCalledWith();
  });
  test('setMaxAudioRecvCount parameter', async () => {
    let nParam = {
      maxCount: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_setMaxAudioRecvCount',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('setMaxAudioRecvCount impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'setMaxAudioRecvCount'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      maxCount: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_setMaxAudioRecvCount',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setMaxAudioRecvCount
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setMaxAudioRecvCount
    ).toBeCalledWith('test');
  });
  test('setAudioRecvRange parameter', async () => {
    let nParam = {
      range: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_setAudioRecvRange',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('setAudioRecvRange impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'setAudioRecvRange'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      range: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_setAudioRecvRange',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setAudioRecvRange
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setAudioRecvRange
    ).toBeCalledWith('test');
  });
  test('setDistanceUnit parameter', async () => {
    let nParam = {
      unit: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_setDistanceUnit',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('setDistanceUnit impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'setDistanceUnit'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      unit: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_setDistanceUnit',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setDistanceUnit
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setDistanceUnit
    ).toBeCalledWith('test');
  });
  test('updateSelfPosition parameter', async () => {
    let nParam = {
      position: undefined,
      axisForward: undefined,
      axisRight: undefined,
      axisUp: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_updateSelfPosition',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('updateSelfPosition impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'updateSelfPosition'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      position: 'test',
      axisForward: 'test',
      axisRight: 'test',
      axisUp: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_updateSelfPosition',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .updateSelfPosition
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .updateSelfPosition
    ).toBeCalledWith('test', 'test', 'test', 'test');
  });
  test('updateSelfPositionEx parameter', async () => {
    let nParam = {
      position: undefined,
      axisForward: undefined,
      axisRight: undefined,
      axisUp: undefined,
      connection: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_updateSelfPositionEx',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('updateSelfPositionEx impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'updateSelfPositionEx'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      position: 'test',
      axisForward: 'test',
      axisRight: 'test',
      axisUp: 'test',
      connection: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_updateSelfPositionEx',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .updateSelfPositionEx
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .updateSelfPositionEx
    ).toBeCalledWith('test', 'test', 'test', 'test', 'test');
  });
  test('updatePlayerPositionInfo parameter', async () => {
    let nParam = {
      playerId: undefined,
      positionInfo: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_updatePlayerPositionInfo',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('updatePlayerPositionInfo impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'updatePlayerPositionInfo'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      playerId: 'test',
      positionInfo: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_updatePlayerPositionInfo',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .updatePlayerPositionInfo
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .updatePlayerPositionInfo
    ).toBeCalledWith('test', 'test');
  });
  test('setParameters parameter', async () => {
    let nParam = {
      params: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_setParameters',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('setParameters impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'setParameters'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      params: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_setParameters',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setParameters
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setParameters
    ).toBeCalledWith('test');
  });
  test('muteLocalAudioStream parameter', async () => {
    let nParam = {
      mute: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_muteLocalAudioStream',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('muteLocalAudioStream impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'muteLocalAudioStream'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      mute: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_muteLocalAudioStream',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .muteLocalAudioStream
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .muteLocalAudioStream
    ).toBeCalledWith('test');
  });
  test('muteAllRemoteAudioStreams parameter', async () => {
    let nParam = {
      mute: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_muteAllRemoteAudioStreams',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('muteAllRemoteAudioStreams impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'muteAllRemoteAudioStreams'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      mute: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_muteAllRemoteAudioStreams',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .muteAllRemoteAudioStreams
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .muteAllRemoteAudioStreams
    ).toBeCalledWith('test');
  });
  test('setZones parameter', async () => {
    let nParam = {
      zones: undefined,
      zoneCount: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_setZones',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('setZones impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'setZones'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      zones: 'test',
      zoneCount: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_setZones',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setZones
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setZones
    ).toBeCalledWith('test', 'test');
  });
  test('setPlayerAttenuation parameter', async () => {
    let nParam = {
      playerId: undefined,
      attenuation: undefined,
      forceSet: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_setPlayerAttenuation',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('setPlayerAttenuation impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'setPlayerAttenuation'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      playerId: 'test',
      attenuation: 'test',
      forceSet: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_setPlayerAttenuation',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setPlayerAttenuation
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .setPlayerAttenuation
    ).toBeCalledWith('test', 'test', 'test');
  });
  test('muteRemoteAudioStream parameter', async () => {
    let nParam = {
      uid: undefined,
      mute: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'BaseSpatialAudioEngine_muteRemoteAudioStream',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('muteRemoteAudioStream impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl,
        'muteRemoteAudioStream'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      uid: 'test',
      mute: 'test',
    };
    let apiParam = new EventParam(
      'BaseSpatialAudioEngine_muteRemoteAudioStream',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .muteRemoteAudioStream
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('BaseSpatialAudioEngine')._impl
        .muteRemoteAudioStream
    ).toBeCalledWith('test', 'test');
  });
});
describe('ILocalSpatialAudioEngine', () => {
  test('initialize impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl,
        'initialize'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'LocalSpatialAudioEngine_initialize',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .initialize
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .initialize
    ).toBeCalledWith();
  });
  test('updateRemotePosition parameter', async () => {
    let nParam = {
      uid: undefined,
      posInfo: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'LocalSpatialAudioEngine_updateRemotePosition',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('updateRemotePosition impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl,
        'updateRemotePosition'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      uid: 'test',
      posInfo: 'test',
    };
    let apiParam = new EventParam(
      'LocalSpatialAudioEngine_updateRemotePosition',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .updateRemotePosition
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .updateRemotePosition
    ).toBeCalledWith('test', 'test');
  });
  test('updateRemotePositionEx parameter', async () => {
    let nParam = {
      uid: undefined,
      posInfo: undefined,
      connection: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'LocalSpatialAudioEngine_updateRemotePositionEx',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('updateRemotePositionEx impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl,
        'updateRemotePositionEx'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      uid: 'test',
      posInfo: 'test',
      connection: 'test',
    };
    let apiParam = new EventParam(
      'LocalSpatialAudioEngine_updateRemotePositionEx',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .updateRemotePositionEx
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .updateRemotePositionEx
    ).toBeCalledWith('test', 'test', 'test');
  });
  test('removeRemotePosition parameter', async () => {
    let nParam = {
      uid: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'LocalSpatialAudioEngine_removeRemotePosition',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('removeRemotePosition impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl,
        'removeRemotePosition'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      uid: 'test',
    };
    let apiParam = new EventParam(
      'LocalSpatialAudioEngine_removeRemotePosition',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .removeRemotePosition
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .removeRemotePosition
    ).toBeCalledWith('test');
  });
  test('removeRemotePositionEx parameter', async () => {
    let nParam = {
      uid: undefined,
      connection: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'LocalSpatialAudioEngine_removeRemotePositionEx',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('removeRemotePositionEx impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl,
        'removeRemotePositionEx'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      uid: 'test',
      connection: 'test',
    };
    let apiParam = new EventParam(
      'LocalSpatialAudioEngine_removeRemotePositionEx',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .removeRemotePositionEx
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .removeRemotePositionEx
    ).toBeCalledWith('test', 'test');
  });

  test('clearRemotePositions impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl,
        'clearRemotePositions'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'LocalSpatialAudioEngine_clearRemotePositions',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .clearRemotePositions
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .clearRemotePositions
    ).toBeCalledWith();
  });
  test('clearRemotePositionsEx parameter', async () => {
    let nParam = {
      connection: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'LocalSpatialAudioEngine_clearRemotePositionsEx',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('clearRemotePositionsEx impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl,
        'clearRemotePositionsEx'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      connection: 'test',
    };
    let apiParam = new EventParam(
      'LocalSpatialAudioEngine_clearRemotePositionsEx',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .clearRemotePositionsEx
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .clearRemotePositionsEx
    ).toBeCalledWith('test');
  });
  test('setRemoteAudioAttenuation parameter', async () => {
    let nParam = {
      uid: undefined,
      attenuation: undefined,
      forceSet: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'LocalSpatialAudioEngine_setRemoteAudioAttenuation',
            JSON.stringify(nParam),
            0,
            '',
            ['test'],
            [],
            1
          )
        );
      } catch (e) {
        expect(e).toEqual(i + ' is undefined');
      }
      nParam[i] = 'test';
    }
  });

  test('setRemoteAudioAttenuation impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl,
        'setRemoteAudioAttenuation'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      uid: 'test',
      attenuation: 'test',
      forceSet: 'test',
    };
    let apiParam = new EventParam(
      'LocalSpatialAudioEngine_setRemoteAudioAttenuation',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .setRemoteAudioAttenuation
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('LocalSpatialAudioEngine')._impl
        .setRemoteAudioAttenuation
    ).toBeCalledWith('test', 'test', 'test');
  });
});
