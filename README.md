jQuery-paginator
================

jQuery-paginator, плагин погинатора на js


параметры по умолчанию

```js

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

```
