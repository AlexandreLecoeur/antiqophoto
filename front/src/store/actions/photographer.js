//va lancer la recup des photographes
export const FETCH_PHOTOGRAPHER = 'FETCH_PHOTOGRAPHER';
export const SET_PHOTOGRAPHER = 'SET_PHOTOGRAPHER';

export const fetchPhotographer = () => ({
	type: FETCH_PHOTOGRAPHER,
});

export const setPhotographer = (photographer) => ({
	type : SET_PHOTOGRAPHER,
	photographer,

});