/**
 * Created by vir-mir on 22.05.14.
 */

(function( $ ) {
	$.fn.bmPaginator = function(options) {

		var settings = $.extend({
				clickEvent: function ($self) { },
				page: 1,
				bmClassItem: 'bmPaginator__item',
				countItem: 0,
				limit: 10,
				limitItem: 10,
				nextPageText: 'Следующая >>>',
				prevPageText: '<<< Предыдущая',
				pageUrl: '#',
				postUrl: '',
				htmlItemLink: "<a class='actionBmPaginatorItem {bmClassItem}' data-page='{pageNumber}' href='{pageUrl}{pageNumber}{postUrl}'>{pageNumberText}</a>",
				htmlItemSpan: "<span class='{bmClassItem} bmPaginator__item__active'>{pageNumberText}</span>"
		}, options),

		$self = this,

		methods = {
			/**
			 * Конструктор пагинатора
			 */
			init: function ()
			{
				methods._renderPaginator();
				methods._events();
			},

			/**
			 * Навешиваем события
			 *
			 * @private
			 */
			_events: function ()
			{
				$('.actionBmPaginatorItem').unbind('click');
				$('.actionBmPaginatorItem').click(function () {
					var $self = $(this);
					settings.page = parseInt($self.data('page'));
					methods.init();
					return settings.clickEvent($self);
				});
			},

			/**
			 * вывод пагинатора
			 *
			 * @private
			 */
			_renderPaginator: function ()
			{
				$self.html('');
				var countPage = methods._getCountPage(),
					limitItemTwo = Math.round(settings.limitItem / 2),
					leftPage = settings.page - limitItemTwo,
					rightPage = settings.page + limitItemTwo;

				leftPage = leftPage < 1 ? 1 : leftPage;
				rightPage = rightPage > countPage ? countPage : rightPage;

				if (settings.page > 1)
				{
					methods._renderItem(settings.page - 1, settings.prevPageText);
				}

				if (settings.page > limitItemTwo + 1)
				{
					methods._renderItem(1, 1);
					methods._renderItem(leftPage - 1, '...');
				}

				for (var i = leftPage; i < rightPage + 1; i++)
				{
					methods._renderItem(i, i);
				}
				if (i < countPage + 1)
				{
					methods._renderItem(rightPage + 1, '...');
					methods._renderItem(countPage, countPage);
				}

				if (settings.page < countPage)
				{
					methods._renderItem(settings.page + 1, settings.nextPageText);
				}
			},

			/**
			 *
			 * @returns {number}
			 * @private
			 */
			_getCountPage: function ()
			{
				return Math.ceil(settings.countItem / settings.limit);
			},

			/**
			 * вывод элимента пагинатора
			 *
			 * @param {number} pageNumber
			 * @private
			 */
			_renderItem: function(pageNumber, pageNumberText)
			{
				settings['pageNumber'] = pageNumber;
				settings['pageNumberText'] = pageNumberText;
				var htmlItem = (pageNumber == settings.page) ? settings.htmlItemSpan : settings.htmlItemLink;
				htmlItem = '"' + htmlItem.replace(/(\{(\w+)\})/ig, "\" + settings['" + '$2' + "'] + \"") + '"';
				$self.append(eval(htmlItem))
			}
		};

		return this.each(methods.init);

	};
})(jQuery);
