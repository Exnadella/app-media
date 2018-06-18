/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   app-media-waveform.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts" />

/**
 * `app-media-waveform` is an element that visualizes the data from an analyser
 * node, such as one produced by `app-media-audio`.
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--app-media-waveform-background-color` | Background color | `#EF2D5E`
 * `--app-media-waveform-foreground-color` | Foreground color | `rgba(255, 255, 255, 0.85)`
 * `--app-media-waveform-stroke-width` | Width of the foreground | `2px`
 */
interface AppMediaWaveformElement extends Polymer.Element, Polymer.IronResizableBehavior {

  /**
   * If true, the analyzer will draw for every animation frame. If
   * false, the analyzer will not draw.
   */
  active: boolean|null|undefined;

  /**
   * An analyser node that should be visualized.
   */
  analyser: AnalyserNode|null;

  /**
   * The computed buffer length of the typed array that will be used to
   * store waveform values.
   */
  readonly bufferLength: number|null|undefined;

  /**
   * The computed typed array that is used to temporarily store waveform
   * values for converting into a visualization.
   */
  readonly data: Uint8Array;
  attached(): void;

  /**
   * Begin visualizing the waveform. This method will recursively call
   * itself (via requestAnimationFrame) until the element's active
   * property becomes false.
   */
  draw(): void;
  _activeChanged(active: any): void;
  _computeBufferLength(analyser: any): any;
  _computeData(bufferLength: any): any;
  _updateMetrics(): void;
}

interface HTMLElementTagNameMap {
  "app-media-waveform": AppMediaWaveformElement;
}
