import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
      query(':enter, :leave', style({ position: 'inherit', width:'inherit' })
      , { optional: true }),
      query('.page-body', style({ opacity: 0 })),
      group([
        query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('.7s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('.7s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
        query(':enter .page-body', stagger(700, [
            style({ transform: 'translateY(100px)' }),
            animate('.7s ease-in-out', 
              style({ transform: 'translateY(0px)', opacity: 1 })),
          ]), {optional: true}),
    ])
  ]),
  transition('* <=> videos', [
    query(':enter, :leave', style({ position: 'inherit', width:'inherit', overflow: 'hidden' })
    , { optional: true }),
    query('.page-body', style({ opacity: 0 })),
    group([
      query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter .page-body', stagger(700, [
          style({ transform: 'translateY(100px)' }),
          animate('.5s ease-in-out', 
            style({ transform: 'translateY(0px)', opacity: 1 })),
        ]), {optional: true}),
  ])
])
])