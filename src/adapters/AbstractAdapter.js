import { PSVError } from '../PSVError';
import { AbstractService } from '../services/AbstractService';

/**
 * @namespace PSV.adapters
 */

/**
 * @summary Base adapters class
 * @memberof PSV.adapters
 * @abstract
 */
export class AbstractAdapter extends AbstractService {

  /**
   * @abstract
   * @summary Indicates if the adapter supports transitions between panoramas
   * @return {boolean}
   */
  supportsTransition() {
    return false;
  }

  /**
   * @abstract
   * @summary Loads the panorama texture(s)
   * @param {*} panorama
   * @param {PSV.PanoData | PSV.PanoDataProvider} [newPanoData]
   * @returns {Promise.<PSV.TextureData>}
   */
  loadTexture(panorama, newPanoData) { // eslint-disable-line no-unused-vars
    throw new PSVError('loadTexture not implemented');
  }

  /**
   * @abstract
   * @summary Creates the cube mesh
   * @param {number} [scale=1]
   * @returns {external:THREE.Mesh}
   */
  createMesh(scale = 1) { // eslint-disable-line no-unused-vars
    throw new PSVError('createMesh not implemented');
  }

  /**
   * @abstract
   * @summary Applies the texture to the mesh
   * @param {external:THREE.Mesh} mesh
   * @param {PSV.TextureData} textureData
   */
  setTexture(mesh, textureData) { // eslint-disable-line no-unused-vars
    throw new PSVError('setTexture not implemented');
  }

  /**
   * @abstract
   * @summary Changes the opacity of the mesh
   * @param {external:THREE.Mesh} mesh
   * @param {number} opacity
   */
  setTextureOpacity(mesh, opacity) { // eslint-disable-line no-unused-vars
    throw new PSVError('setTextureOpacity not implemented');
  }

}
