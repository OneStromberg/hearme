import { put, take } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { error } from './../store/saga';

test('saga', assert => {
  const gen = cloneableGenerator(error)();
  console.log(gen.next()); // DO_STUFF
  gen.next(); // DO_STUFF
  gen.next(); // CHOOSE_NUMBER
});