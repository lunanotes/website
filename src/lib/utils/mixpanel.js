import mixpanel from 'mixpanel-browser';
import { dev } from '$app/env';

mixpanel.init('1018d1810b9bad39ef35783337a4ba91', {
	disable: dev
});

export { mixpanel };
