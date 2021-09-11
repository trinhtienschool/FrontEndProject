import {animate, group, query, state, style, transition, trigger} from "@angular/animations";
import {relative} from "@angular/compiler-cli/src/ngtsc/file_system";

export let fade = trigger('fade', [
  state('void', style({opacity: 0, height: '!'})),
  transition('void =>*', [
    animate(1000),

  ]),
  transition('* =>void', [
    animate(1000)
  ])
]);
// export let fade = trigger('fade', [
//
//   transition('void =>*', [
//     style({transform:'translateX(100%)'}),
//     animate(1000),
//
//   ]),
//   transition('* =>void', [
//     animate(1000,style({transform:'translateX(-100%)', opacity:0}))
//   ])
// ]);

export let animationRoute = trigger('routeAnimation', [
  transition('*<=>*', [
    style({position: 'relative', height: '!'}),
    query(':enter,:leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',

      })
    ], {optional: true}),
    query(':enter', [
      style({left: '100%'})
    ], {optional: true}),
    group([
      query(':enter', [
        animate('1000ms ease-out', style({left: '0%'}))
      ], {optional: true}),
      query(':leave', [
        animate('1000ms ease-out', style({left: '-100%', opacity: 0}))
      ], {optional: true})
    ])
  ])
])
