import { createContext, useContext, useReducer } from 'react';
import { appReducer, initQuestionnaireState } from './reducers/AppReducer';
import { QuestionnaireStateType } from '../types/form';
import { DispatchContextType } from './reducers/types';

/** contexts for state and dispatch */
export const AppStateContext = createContext(initQuestionnaireState);
export const AppDispatchContext = createContext({} as DispatchContextType);

/**
 * AppContextProvider
 * @returns - App wrapped with context providers
 */
export function AppContextProvider({ children }: any) {

  const [appState, appDispatch] = useReducer(appReducer, initQuestionnaireState);

  return (
    <AppStateContext.Provider value={appState}>
      <AppDispatchContext.Provider value={appDispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

/**
 * AppState 
 * @returns the global state of the application
 */
export function useAppState(): QuestionnaireStateType {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppContextProvider");
  }
  return context;
}

/**
 * AppDispatch
 * @returns the dispatch function, for global state
 */
export function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppContextProvider");
  }
  return context;
}