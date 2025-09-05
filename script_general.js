(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scripts":{"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPixels":TDV.Tour.Script.getPixels,"registerKey":TDV.Tour.Script.registerKey,"shareSocial":TDV.Tour.Script.shareSocial,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"downloadFile":TDV.Tour.Script.downloadFile,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"historyGoForward":TDV.Tour.Script.historyGoForward,"translate":TDV.Tour.Script.translate,"initQuiz":TDV.Tour.Script.initQuiz,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"clone":TDV.Tour.Script.clone,"getMediaByName":TDV.Tour.Script.getMediaByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"disableVR":TDV.Tour.Script.disableVR,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"createTween":TDV.Tour.Script.createTween,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"init":TDV.Tour.Script.init,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"playAudioList":TDV.Tour.Script.playAudioList,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setLocale":TDV.Tour.Script.setLocale,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"enableVR":TDV.Tour.Script.enableVR,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"mixObject":TDV.Tour.Script.mixObject,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleVR":TDV.Tour.Script.toggleVR,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showWindow":TDV.Tour.Script.showWindow,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizStart":TDV.Tour.Script.quizStart,"getKey":TDV.Tour.Script.getKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"existsKey":TDV.Tour.Script.existsKey,"getOverlays":TDV.Tour.Script.getOverlays,"openLink":TDV.Tour.Script.openLink,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizShowScore":TDV.Tour.Script.quizShowScore,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia},"data":{"defaultLocale":"fr","displayTooltipInTouchScreens":true,"name":"Player741","locales":{"fr":"locale/fr.txt"},"history":{},"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1,"volume":1,"speechOnInfoWindow":false,"rate":1}},"class":"Player","watermark":false,"hash": "a9818835ccaa8769cec11e7a861336aeca66388cc53f45094a825ba09651c84f", "definitions": [{"arrowKeysAction":"translate","displayPlaybackBar":true,"viewerArea":"this.MainViewer","keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation"},{"subtitlesTop":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarBottom":5,"data":{"name":"Main Viewer"},"vrThumbstickRotationStep":20,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontSize":"3vmin","height":"100%","playbackBarHeight":10,"width":"100%","toolTipShadowColor":"#333138","playbackBarHeadWidth":6,"toolTipPaddingRight":6,"vrPointerSelectionTime":2000,"toolTipTextShadowColor":"#000000","progressBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"progressBackgroundColor":["#000000"],"playbackBarProgressBorderSize":0,"playbackBarRight":0,"minHeight":50,"playbackBarProgressBackgroundColor":["#3399FF"],"minWidth":100,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"id":"MainViewer","progressBottom":10,"progressHeight":2,"toolTipPaddingLeft":6,"subtitlesGap":0,"toolTipBorderColor":"#767676","subtitlesBottom":50,"toolTipBackgroundColor":"#F6F6F6","progressLeft":"33%","playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":3,"progressBorderSize":0,"vrPointerColor":"#FFFFFF","toolTipPaddingTop":4,"class":"ViewerArea","subtitlesFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","playbackBarLeft":0,"progressBarBorderRadius":2,"playbackBarProgressBackgroundColorRatios":[0],"firstTransitionDuration":0,"playbackBarHeadHeight":15,"progressBarBorderSize":0,"progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"propagateClick":false,"toolTipPaddingBottom":4,"surfaceReticleColor":"#FFFFFF","toolTipFontFamily":"Arial","progressOpacity":0.7,"progressRight":"33%","playbackBarBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","toolTipFontSize":"1.11vmin","vrPointerSelectionColor":"#FF6600"},{"label":trans('media_3F0277A7_2D33_C19D_4195_55349A223106.label'),"data":{"label":"temp_video_1748790120752"},"hfovMax":140,"id":"media_3F0277A7_2D33_C19D_4195_55349A223106","hfovMin":60,"class":"Video360","thumbnailUrl":"media/media_3F0277A7_2D33_C19D_4195_55349A223106_t.webp","hfov":360,"vfov":180,"pitch":0,"overlays":["this.media_3F0277A7_2D33_C19D_4195_55349A223106_tcap0"],"video":["this.videores_0F4049B3_196B_6D59_41B3_A75325AB8403","this.videores_0F4079B3_196B_6D59_41A8_6712CA924A52"]},{"class":"RotationalCamera","id":"media_3F0277A7_2D33_C19D_4195_55349A223106_camera","initialPosition":{"yaw":0,"hfov":120,"pitch":0,"class":"RotationalCameraPosition"},"enterPointingToHorizon":true},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.media_3F0277A7_2D33_C19D_4195_55349A223106","camera":"this.media_3F0277A7_2D33_C19D_4195_55349A223106_camera","end":"this.trigger('tourEnded')","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"}],"class":"PlayList","id":"mainPlayList"},{"image":"this.res_357FB358_2D35_C2B3_41C3_4AB2483E0718","distance":50,"class":"TripodCapPanoramaOverlay","id":"media_3F0277A7_2D33_C19D_4195_55349A223106_tcap0","hfov":70.5,"angle":-57},{"framerate":29.97,"type":"application/x-mpegurl","class":"Video360Resource","height":1920,"id":"videores_0F4049B3_196B_6D59_41B3_A75325AB8403","posterURL":trans('videores_0F4049B3_196B_6D59_41B3_A75325AB8403.posterURL'),"url":trans('videores_0F4049B3_196B_6D59_41B3_A75325AB8403.url'),"width":3840},{"bitrate":17677,"posterURL":trans('videores_0F4079B3_196B_6D59_41A8_6712CA924A52.posterURL'),"width":3840,"codec":"h264","framerate":29.97,"type":"video/mp4","class":"Video360Resource","height":1920,"id":"videores_0F4079B3_196B_6D59_41A8_6712CA924A52","url":trans('videores_0F4079B3_196B_6D59_41A8_6712CA924A52.url')},{"class":"ImageResource","id":"res_357FB358_2D35_C2B3_41C3_4AB2483E0718","levels":[{"class":"ImageResourceLevel","url":"media/res_357FB358_2D35_C2B3_41C3_4AB2483E0718_0.webp","height":1000,"width":1000}]}],"start":"this.init()","scrollBarColor":"#000000","width":"100%","gap":10,"height":"100%","children":["this.MainViewer"],"layout":"absolute","propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"minWidth":0,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","scrollBarMargin":2,"backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.35, Fri Sep 5 2025