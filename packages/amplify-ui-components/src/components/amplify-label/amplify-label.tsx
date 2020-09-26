import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'amplify-label',
  styleUrl: 'amplify-label.scss',
  shadow: false, // Fix Shadow DOM autofill
  scoped: true,
})
export class AmplifyLabel {
  /** Reflects the value of the for content property of html element */
  @Prop() htmlFor: string;

  render() {
    return (
      <label class="label" htmlFor={this.htmlFor}>
        <slot />
      </label>
    );
  }
}
