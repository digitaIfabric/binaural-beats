import {el} from '@elemaudio/core';
import {default as core} from '@elemaudio/node-renderer';

core.on('load', () => {
  core.render(
    // el.mul(0.3, el.cycle(100)),
    // el.mul(0.3, el.cycle(140)),
    el.mul(0.3, el.cycle(200)),
    el.mul(0.3, el.cycle(240)),
  );
});

core.initialize();