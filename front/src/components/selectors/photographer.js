/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} photographer - toutes les recettes
 * @param {string} searchedId - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
 export function findBiographie(photographer, searchedId) {
	const photographe = photographer.find((testedPhotographe) => {
	  return testedPhotographe.id === searchedId;
	});
	return photographe;
  }
  