import { component$, Host, useClientEffect$ } from '@builder.io/qwik';

export default component$(() => {
  const state = {};
  useClientEffect$(() => {
    console.log(state);
  });
  return (
    <Host>
      <h1>Welcome to QwikCity</h1>

      <p>The meta-framework for Qwik.</p>
    </Host>
  );
});
