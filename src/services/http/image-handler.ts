import {NODE_ENV} from '../../config/environments.json';
import {APP_API} from '../../config/api.json';

const apiEnv: string = NODE_ENV;

/**
 * Function to get random images...
 */
export default async function imageApiHandler() {
  try {
    const response = await fetch(APP_API[apiEnv].basePath + APP_API[apiEnv].resources.randomDogPath, {
      method: 'GET',
    });

    if (response && response.ok && response.status === 200) {
        return response.json();
    } else if (response && response.status === 401) {
        throw new Error('OOPS. Something went wrong fetching image. Please try again');
    }
  } catch (err) {
    throw new Error('OOPS. Something went wrong fetching image. Please try again');
  }
}
