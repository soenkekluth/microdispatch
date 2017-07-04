import MicroDispatch from './microdispatch';
export default MicroDispatch;
export { default as microdispatch } from './decorator';
export const dispatcher = new MicroDispatch();
