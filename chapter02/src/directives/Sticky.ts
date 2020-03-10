import Vue from 'vue';
import { DirectiveBinding } from 'vue/types/options';

Vue.directive('sticky', {
    bind(el: HTMLElement, { arg = 'top' } : DirectiveBinding) {
        el.style.position = 'fixed';
        const cssPosition:string = arg;
		(el.style as any)[cssPosition] = 0;
    }
})