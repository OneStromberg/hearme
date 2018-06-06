//@flow
import Action from './Action';
import { actionTypes } from './../constants'

export const runTest = (testName: string, value: number) => Action(actionTypes.RUN_TEST, { testName, value });