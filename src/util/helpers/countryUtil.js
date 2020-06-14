/* eslint-disable no-nested-ternary */

export default (countries, sortItem, type = 1) => {
  countries.sort((a, b) => {
    if (a[sortItem] < b[sortItem]) return 1;
    if (a[sortItem] > b[sortItem]) return -1;

    return 0;
  });

  return countries.reduce((acc, item) => {
    const {
      Country, CountryCode, Slug,
    } = item;

    const valueCount = parseInt(item[sortItem], 10).toLocaleString();
    const count = (type === 3)
      ? `${valueCount} deaths` : valueCount;
    const name = (Country.length > 14) ? ((Slug.length > 10) ? CountryCode : Slug) : Country;
    const label = (type === 3) ? `${item.TotalRecovered} recovered` : 'deaths';

    return [
      ...acc,
      {
        text1: count,
        text2: (type === 1) ? name : label,
        [(type >= 2) && 'text3']: (type === 3) ? name.split('NG')[0] : name,
        [(type === 3) && 'text4']: 'NG',
        details: item,
      },
    ];
  }, []);
};
