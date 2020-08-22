module.exports = {
  /**
   * Returns back some attributes based on wether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = '';

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },

  filterCollectionsByTaxonomy(collection, taxonomyKey, taxonomy = 'tags') {
    if (taxonomy === 'tags') {
      return collection[taxonomyKey];
    }
    const items = [];

    collection.all.forEach(item => {
      if (!item.data.hasOwnProperty(taxonomy)) {
        return;
      }

      let taxonomyValue = item.data[taxonomy];

      if (typeof taxonomyValue === 'string') {
        taxonomyValue = [taxonomyValue];
      }

      if (taxonomyValue.includes(taxonomyKey)) {
        items.push(item);
      }
    });

    return items;
  },

  // Takes the item returns back a guaranteed array of categories (or empty array)
  getCategories(item, itemIsCategories = false) {
    const taxonomyValue = itemIsCategories ? item : item.data['categories'];
    let response = [];

    switch (typeof taxonomyValue) {
      case 'string':
        response = [taxonomyValue];
        break;
      case 'object':
        response = taxonomyValue;
        break;
    }

    return response;
  }
};
