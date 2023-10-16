/// Generated by terra, DO NOT MODIFY BY HAND.

import {
  CallIrisApiResult,
  EventParam,
  IrisApiEngine,
  IrisCore,
} from 'iris-web-core';

import { initIrisRtc } from '../../src/index';
import { IrisRtcEngine } from '../engine/IrisRtcEngine';

const bindingAPI = require('../../src/binding/IAgoraMusicContentCenterDispatch');

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

describe('MusicChartCollection', () => {
  test('getCount impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicChartCollection')._impl,
        'getCount'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'MusicChartCollection_getCount',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicChartCollection')._impl.getCount
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicChartCollection')._impl.getCount
    ).toBeCalledWith();
  });
  test('get parameter', async () => {
    let nParam = {
      index: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicChartCollection_get',
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

  test('get impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicChartCollection')._impl,
        'get'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      index: 'test',
    };
    let apiParam = new EventParam(
      'MusicChartCollection_get',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicChartCollection')._impl.get
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicChartCollection')._impl.get
    ).toBeCalledWith('test');
  });
});
describe('MusicCollection', () => {
  test('getCount impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl,
        'getCount'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'MusicCollection_getCount',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getCount
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getCount
    ).toBeCalledWith();
  });

  test('getTotal impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl,
        'getTotal'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'MusicCollection_getTotal',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getTotal
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getTotal
    ).toBeCalledWith();
  });

  test('getPage impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl,
        'getPage'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'MusicCollection_getPage',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getPage
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getPage
    ).toBeCalledWith();
  });

  test('getPageSize impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl,
        'getPageSize'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'MusicCollection_getPageSize',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getPageSize
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getPageSize
    ).toBeCalledWith();
  });
  test('getMusic parameter', async () => {
    let nParam = {
      index: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicCollection_getMusic',
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

  test('getMusic impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl,
        'getMusic'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      index: 'test',
    };
    let apiParam = new EventParam(
      'MusicCollection_getMusic',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getMusic
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicCollection')._impl.getMusic
    ).toBeCalledWith('test');
  });
});
describe('IMusicContentCenterEventHandler', () => {
  test('onMusicChartsResult impl call', async () => {
    let eventHandler = new bindingAPI.IMusicContentCenterEventHandler(
      irisRtcEngine
    );
    jest.spyOn(eventHandler._engine.irisEventHandlerManager, 'notifyEvent');
    jest.spyOn(eventHandler, 'eventKey');
    eventHandler.onMusicChartsResult(undefined, undefined, undefined);
    expect(
      eventHandler._engine.irisEventHandlerManager.notifyEvent
    ).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledWith('onMusicChartsResult');
  });
  test('onMusicCollectionResult impl call', async () => {
    let eventHandler = new bindingAPI.IMusicContentCenterEventHandler(
      irisRtcEngine
    );
    jest.spyOn(eventHandler._engine.irisEventHandlerManager, 'notifyEvent');
    jest.spyOn(eventHandler, 'eventKey');
    eventHandler.onMusicCollectionResult(undefined, undefined, undefined);
    expect(
      eventHandler._engine.irisEventHandlerManager.notifyEvent
    ).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledWith('onMusicCollectionResult');
  });
  test('onLyricResult impl call', async () => {
    let eventHandler = new bindingAPI.IMusicContentCenterEventHandler(
      irisRtcEngine
    );
    jest.spyOn(eventHandler._engine.irisEventHandlerManager, 'notifyEvent');
    jest.spyOn(eventHandler, 'eventKey');
    eventHandler.onLyricResult(undefined, undefined, undefined, undefined);
    expect(
      eventHandler._engine.irisEventHandlerManager.notifyEvent
    ).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledWith('onLyricResult');
  });
  test('onSongSimpleInfoResult impl call', async () => {
    let eventHandler = new bindingAPI.IMusicContentCenterEventHandler(
      irisRtcEngine
    );
    jest.spyOn(eventHandler._engine.irisEventHandlerManager, 'notifyEvent');
    jest.spyOn(eventHandler, 'eventKey');
    eventHandler.onSongSimpleInfoResult(
      undefined,
      undefined,
      undefined,
      undefined
    );
    expect(
      eventHandler._engine.irisEventHandlerManager.notifyEvent
    ).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledWith('onSongSimpleInfoResult');
  });
  test('onPreLoadEvent impl call', async () => {
    let eventHandler = new bindingAPI.IMusicContentCenterEventHandler(
      irisRtcEngine
    );
    jest.spyOn(eventHandler._engine.irisEventHandlerManager, 'notifyEvent');
    jest.spyOn(eventHandler, 'eventKey');
    eventHandler.onPreLoadEvent(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    );
    expect(
      eventHandler._engine.irisEventHandlerManager.notifyEvent
    ).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledTimes(1);
    expect(eventHandler.eventKey).toBeCalledWith('onPreLoadEvent');
  });
});
describe('IMusicPlayer', () => {});
describe('IMusicContentCenter', () => {
  test('initialize parameter', async () => {
    let nParam = {
      configuration: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_initialize',
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

  test('initialize impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'initialize'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      configuration: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_initialize',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.initialize
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.initialize
    ).toBeCalledWith('test');
  });
  test('renewToken parameter', async () => {
    let nParam = {
      token: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_renewToken',
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

  test('renewToken impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'renewToken'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      token: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_renewToken',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.renewToken
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.renewToken
    ).toBeCalledWith('test');
  });

  test('release impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'release'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'MusicContentCenter_release',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.release
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.release
    ).toBeCalledWith();
  });
  test('registerEventHandler parameter', async () => {
    let nParam = {
      eventHandler: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_registerEventHandler',
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

  test('registerEventHandler impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'registerEventHandler'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      eventHandler: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_registerEventHandler',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .registerEventHandler
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .registerEventHandler
    ).toBeCalledWith('test');
  });

  test('unregisterEventHandler impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'unregisterEventHandler'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'MusicContentCenter_unregisterEventHandler',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .unregisterEventHandler
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .unregisterEventHandler
    ).toBeCalledWith();
  });

  test('createMusicPlayer impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'createMusicPlayer'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {};
    let apiParam = new EventParam(
      'MusicContentCenter_createMusicPlayer',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .createMusicPlayer
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .createMusicPlayer
    ).toBeCalledWith();
  });
  test('getMusicCharts parameter', async () => {
    let nParam = {
      requestId: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_getMusicCharts',
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

  test('getMusicCharts impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'getMusicCharts'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      requestId: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_getMusicCharts',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .getMusicCharts
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .getMusicCharts
    ).toBeCalledWith('test');
  });
  test('getMusicCollectionByMusicChartId parameter', async () => {
    let nParam = {
      requestId: undefined,
      musicChartId: undefined,
      page: undefined,
      pageSize: undefined,
      jsonOption: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_getMusicCollectionByMusicChartId',
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

  test('getMusicCollectionByMusicChartId impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'getMusicCollectionByMusicChartId'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      requestId: 'test',
      musicChartId: 'test',
      page: 'test',
      pageSize: 'test',
      jsonOption: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_getMusicCollectionByMusicChartId',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .getMusicCollectionByMusicChartId
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .getMusicCollectionByMusicChartId
    ).toBeCalledWith('test', 'test', 'test', 'test', 'test');
  });
  test('searchMusic parameter', async () => {
    let nParam = {
      requestId: undefined,
      keyWord: undefined,
      page: undefined,
      pageSize: undefined,
      jsonOption: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_searchMusic',
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

  test('searchMusic impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'searchMusic'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      requestId: 'test',
      keyWord: 'test',
      page: 'test',
      pageSize: 'test',
      jsonOption: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_searchMusic',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .searchMusic
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .searchMusic
    ).toBeCalledWith('test', 'test', 'test', 'test', 'test');
  });
  test('preload parameter', async () => {
    let nParam = {
      songCode: undefined,
      jsonOption: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_preload',
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

  test('preload impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'preload'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      songCode: 'test',
      jsonOption: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_preload',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.preload
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.preload
    ).toBeCalledWith('test', 'test');
  });
  test('preload2 parameter', async () => {
    let nParam = {
      requestId: undefined,
      songCode: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_preload2',
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

  test('preload2 impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'preload2'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      requestId: 'test',
      songCode: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_preload2',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.preload2
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.preload2
    ).toBeCalledWith('test', 'test');
  });
  test('removeCache parameter', async () => {
    let nParam = {
      songCode: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_removeCache',
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

  test('removeCache impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'removeCache'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      songCode: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_removeCache',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .removeCache
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .removeCache
    ).toBeCalledWith('test');
  });
  test('getCaches parameter', async () => {
    let nParam = {
      cacheInfo: undefined,
      cacheInfoSize: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_getCaches',
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

  test('getCaches impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'getCaches'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      cacheInfo: 'test',
      cacheInfoSize: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_getCaches',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.getCaches
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.getCaches
    ).toBeCalledWith('test', 'test');
  });
  test('isPreloaded parameter', async () => {
    let nParam = {
      songCode: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_isPreloaded',
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

  test('isPreloaded impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'isPreloaded'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      songCode: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_isPreloaded',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .isPreloaded
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .isPreloaded
    ).toBeCalledWith('test');
  });
  test('getLyric parameter', async () => {
    let nParam = {
      requestId: undefined,
      songCode: undefined,
      LyricType: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_getLyric',
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

  test('getLyric impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'getLyric'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      requestId: 'test',
      songCode: 'test',
      LyricType: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_getLyric',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.getLyric
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl.getLyric
    ).toBeCalledWith('test', 'test', 'test');
  });
  test('getSongSimpleInfo parameter', async () => {
    let nParam = {
      requestId: undefined,
      songCode: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_getSongSimpleInfo',
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

  test('getSongSimpleInfo impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'getSongSimpleInfo'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      requestId: 'test',
      songCode: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_getSongSimpleInfo',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .getSongSimpleInfo
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .getSongSimpleInfo
    ).toBeCalledWith('test', 'test');
  });
  test('getInternalSongCode parameter', async () => {
    let nParam = {
      songCode: undefined,
      jsonOption: undefined,
      internalSongCode: undefined,
    };
    for (let i in nParam) {
      try {
        await IrisCore.callIrisApi(
          apiEnginePtr,
          new EventParam(
            'MusicContentCenter_getInternalSongCode',
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

  test('getInternalSongCode impl call', async () => {
    jest
      .spyOn(
        irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl,
        'getInternalSongCode'
      )
      .mockResolvedValue(new CallIrisApiResult(0, ''));
    let nParam = {
      songCode: 'test',
      jsonOption: 'test',
      internalSongCode: 'test',
    };
    let apiParam = new EventParam(
      'MusicContentCenter_getInternalSongCode',
      JSON.stringify(nParam),
      0,
      '',
      ['test'],
      [],
      1
    );
    await IrisCore.callIrisApi(apiEnginePtr, apiParam);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .getInternalSongCode
    ).toBeCalledTimes(1);
    expect(
      irisRtcEngine.implDispatchesMap.get('MusicContentCenter')._impl
        .getInternalSongCode
    ).toBeCalledWith('test', 'test', 'test');
  });
});