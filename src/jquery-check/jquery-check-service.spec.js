import angular from 'angular';
import jQueryCheckServiceFactory from './jquery-check-service';

describe('jQueryCheckService', () => {
    var jQueryCheckService;

    beforeEach(() => jQueryCheckService = jQueryCheckServiceFactory());

    describe('getApplicationElement() method', () => {
        it('should return the element with the ng-app element', () => {
            var element = angular.element, div = element('<div id="foo" ng-app></div>')[0];
            document.body.appendChild(div);

            expect(element(jQueryCheckService.getApplicationElement()).attr('id')).toBe('foo');
        });
    });
});
