/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ANY_STATE as ANY_STATE_, DEFAULT_STATE as DEFAULT_STATE_, EMPTY_STATE as EMPTY_STATE_, FILL_STYLE_FLAG as FILL_STYLE_FLAG_} from './animation/animation_constants';
import {AnimationGroupPlayer as AnimationGroupPlayer_} from './animation/animation_group_player';
import {AnimationKeyframe as AnimationKeyframe_} from './animation/animation_keyframe';
import {AnimationPlayer as AnimationPlayer_, NoOpAnimationPlayer as NoOpAnimationPlayer_} from './animation/animation_player';
import {AnimationSequencePlayer as AnimationSequencePlayer_} from './animation/animation_sequence_player';
import * as animationUtils from './animation/animation_style_util';
import {AnimationStyles as AnimationStyles_} from './animation/animation_styles';
import {AnimationTransition} from './animation/animation_transition';
import {ALLOW_MULTIPLE_PLATFORMS} from './application_ref';
import * as application_tokens from './application_tokens';
import * as change_detection_util from './change_detection/change_detection_util';
import * as constants from './change_detection/constants';
import * as console from './console';
import * as debug from './debug/debug_renderer';
import * as reflective_provider from './di/reflective_provider';
import {ERROR_COMPONENT_TYPE} from './errors';
import * as component_factory from './linker/component_factory';
import * as component_factory_resolver from './linker/component_factory_resolver';
import * as debug_context from './linker/debug_context';
import * as ng_module_factory from './linker/ng_module_factory';
import * as ng_module_factory_loader from './linker/ng_module_factory_loader';
import * as template_ref from './linker/template_ref';
import * as view from './linker/view';
import * as view_container from './linker/view_container';
import * as view_type from './linker/view_type';
import * as view_utils from './linker/view_utils';
import * as lifecycle_hooks from './metadata/lifecycle_hooks';
import * as metadata_view from './metadata/view';
import * as reflection from './reflection/reflection';
// We need to import this name separately from the above wildcard, because this symbol is exposed.
import {Reflector} from './reflection/reflection'; // tslint:disable-line
import * as reflection_capabilities from './reflection/reflection_capabilities';
import * as reflector_reader from './reflection/reflector_reader';
import * as reflection_types from './reflection/types';
import * as api from './render/api';
import {TransitionEngine} from './transition/transition_engine';
import * as decorators from './util/decorators';
import {isObservable, isPromise} from './util/lang';
import * as viewEngine from './view/index';

export const __core_private__: {
  isDefaultChangeDetectionStrategy: typeof constants.isDefaultChangeDetectionStrategy,
  ChangeDetectorStatus: typeof constants.ChangeDetectorStatus,
  _ChangeDetectorStatus: constants.ChangeDetectorStatus,
  constructDependencies: typeof reflective_provider.constructDependencies,
  LifecycleHooks: typeof lifecycle_hooks.LifecycleHooks,
  _LifecycleHooks: lifecycle_hooks.LifecycleHooks,
  LIFECYCLE_HOOKS_VALUES: typeof lifecycle_hooks.LIFECYCLE_HOOKS_VALUES,
  ReflectorReader: typeof reflector_reader.ReflectorReader,
  _ReflectorReader: reflector_reader.ReflectorReader,
  _SetterFn: reflection_types.SetterFn;
  _GetterFn: reflection_types.GetterFn;
  _MethodFn: reflection_types.MethodFn;
  CodegenComponentFactoryResolver:
      typeof component_factory_resolver.CodegenComponentFactoryResolver,
  ComponentRef_: typeof component_factory.ComponentRef_,
  _CodegenComponentFactoryResolver: component_factory_resolver.CodegenComponentFactoryResolver,
  ViewContainer: typeof view_container.ViewContainer,
  _ViewContainer: view_container.ViewContainer,
  AppView: typeof view.AppView,
  _AppView: view.AppView<any>,
  DebugAppView: typeof view.DebugAppView,
  _DebugAppView: view.DebugAppView<any>,
  NgModuleInjector: typeof ng_module_factory.NgModuleInjector,
  _NgModuleInjector: ng_module_factory.NgModuleInjector<any>,
  registerModuleFactory: typeof ng_module_factory_loader.registerModuleFactory,
  ViewType: typeof view_type.ViewType,
  _ViewType: view_type.ViewType,
  ViewMetadata: typeof metadata_view.ViewMetadata,
  _ViewMetadata: metadata_view.ViewMetadata,
  DebugContext: typeof debug_context.DebugContext,
  _DebugContext: debug_context.DebugContext,
  StaticNodeDebugInfo: typeof debug_context.StaticNodeDebugInfo,
  _StaticNodeDebugInfo: debug_context.StaticNodeDebugInfo,
  devModeEqual: typeof change_detection_util.devModeEqual,
  ValueUnwrapper: typeof change_detection_util.ValueUnwrapper,
  _ValueUnwrapper: change_detection_util.ValueUnwrapper,
  RenderDebugInfo: typeof api.RenderDebugInfo,
  _RenderDebugInfo: api.RenderDebugInfo,
  _DirectRenderer: api.DirectRenderer,
  TemplateRef_: typeof template_ref.TemplateRef_,
  _TemplateRef_: template_ref.TemplateRef_<any>,
  ReflectionCapabilities: typeof reflection_capabilities.ReflectionCapabilities,
  _ReflectionCapabilities: reflection_capabilities.ReflectionCapabilities,
  makeDecorator: typeof decorators.makeDecorator,
  DebugDomRootRenderer: typeof debug.DebugDomRootRenderer,
  _DebugDomRootRenderer: debug.DebugDomRootRenderer,
  Console: typeof console.Console,
  _Console: console.Console,
  reflector: typeof reflection.reflector,
  Reflector: typeof reflection.Reflector,
  _Reflector: reflection.Reflector,
  NoOpAnimationPlayer: typeof NoOpAnimationPlayer_,
  _NoOpAnimationPlayer: NoOpAnimationPlayer_,
  AnimationPlayer: typeof AnimationPlayer_,
  _AnimationPlayer: AnimationPlayer_,
  AnimationSequencePlayer: typeof AnimationSequencePlayer_,
  _AnimationSequencePlayer: AnimationSequencePlayer_,
  AnimationGroupPlayer: typeof AnimationGroupPlayer_,
  _AnimationGroupPlayer: AnimationGroupPlayer_,
  AnimationKeyframe: typeof AnimationKeyframe_,
  _AnimationKeyframe: AnimationKeyframe_,
  prepareFinalAnimationStyles: typeof animationUtils.prepareFinalAnimationStyles,
  balanceAnimationKeyframes: typeof animationUtils.balanceAnimationKeyframes,
  flattenStyles: typeof animationUtils.flattenStyles,
  clearStyles: typeof animationUtils.clearStyles,
  renderStyles: typeof animationUtils.renderStyles,
  collectAndResolveStyles: typeof animationUtils.collectAndResolveStyles,
  APP_ID_RANDOM_PROVIDER: typeof application_tokens.APP_ID_RANDOM_PROVIDER,
  AnimationStyles: typeof AnimationStyles_,
  _AnimationStyles: AnimationStyles_,
  ANY_STATE: typeof ANY_STATE_,
  DEFAULT_STATE: typeof DEFAULT_STATE_,
  EMPTY_STATE: typeof EMPTY_STATE_,
  FILL_STYLE_FLAG: typeof FILL_STYLE_FLAG_,
  isPromise: typeof isPromise,
  isObservable: typeof isObservable,
  AnimationTransition: typeof AnimationTransition,
  ALLOW_MULTIPLE_PLATFORMS: typeof ALLOW_MULTIPLE_PLATFORMS,
  view_utils: typeof view_utils,
  ERROR_COMPONENT_TYPE: typeof ERROR_COMPONENT_TYPE,
  viewEngine: typeof viewEngine,
  TransitionEngine: typeof TransitionEngine
} = {
  isDefaultChangeDetectionStrategy: constants.isDefaultChangeDetectionStrategy,
  ChangeDetectorStatus: constants.ChangeDetectorStatus,
  constructDependencies: reflective_provider.constructDependencies,
  LifecycleHooks: lifecycle_hooks.LifecycleHooks,
  LIFECYCLE_HOOKS_VALUES: lifecycle_hooks.LIFECYCLE_HOOKS_VALUES,
  ReflectorReader: reflector_reader.ReflectorReader,
  CodegenComponentFactoryResolver: component_factory_resolver.CodegenComponentFactoryResolver,
  ComponentRef_: component_factory.ComponentRef_,
  ViewContainer: view_container.ViewContainer,
  AppView: view.AppView,
  DebugAppView: view.DebugAppView,
  NgModuleInjector: ng_module_factory.NgModuleInjector,
  registerModuleFactory: ng_module_factory_loader.registerModuleFactory,
  ViewType: view_type.ViewType,
  view_utils: view_utils,
  viewEngine: viewEngine,
  ViewMetadata: metadata_view.ViewMetadata,
  DebugContext: debug_context.DebugContext,
  StaticNodeDebugInfo: debug_context.StaticNodeDebugInfo,
  devModeEqual: change_detection_util.devModeEqual,
  ValueUnwrapper: change_detection_util.ValueUnwrapper,
  RenderDebugInfo: api.RenderDebugInfo,
  TemplateRef_: template_ref.TemplateRef_,
  ReflectionCapabilities: reflection_capabilities.ReflectionCapabilities,
  makeDecorator: decorators.makeDecorator,
  DebugDomRootRenderer: debug.DebugDomRootRenderer,
  Console: console.Console,
  reflector: reflection.reflector,
  Reflector: reflection.Reflector,
  NoOpAnimationPlayer: NoOpAnimationPlayer_,
  AnimationPlayer: AnimationPlayer_,
  AnimationSequencePlayer: AnimationSequencePlayer_,
  AnimationGroupPlayer: AnimationGroupPlayer_,
  AnimationKeyframe: AnimationKeyframe_,
  prepareFinalAnimationStyles: animationUtils.prepareFinalAnimationStyles,
  balanceAnimationKeyframes: animationUtils.balanceAnimationKeyframes,
  flattenStyles: animationUtils.flattenStyles,
  clearStyles: animationUtils.clearStyles,
  renderStyles: animationUtils.renderStyles,
  collectAndResolveStyles: animationUtils.collectAndResolveStyles,
  APP_ID_RANDOM_PROVIDER: application_tokens.APP_ID_RANDOM_PROVIDER,
  AnimationStyles: AnimationStyles_,
  ANY_STATE: ANY_STATE_,
  DEFAULT_STATE: DEFAULT_STATE_,
  EMPTY_STATE: EMPTY_STATE_,
  FILL_STYLE_FLAG: FILL_STYLE_FLAG_,
  isPromise: isPromise,
  isObservable: isObservable,
  AnimationTransition: AnimationTransition,
  ALLOW_MULTIPLE_PLATFORMS: ALLOW_MULTIPLE_PLATFORMS,
  ERROR_COMPONENT_TYPE: ERROR_COMPONENT_TYPE,
  TransitionEngine: TransitionEngine
} as any /* TODO(misko): export these using omega names instead */;
