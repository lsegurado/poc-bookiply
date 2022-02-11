import { TypedUseSelectorHook } from "react-redux"
import { RootState } from "../app/store"
import { mockState } from "../__fixtures__/state";

const mockUseAppDispatch = jest.fn();

const mockUseAppSelector: TypedUseSelectorHook<RootState> = (func) => func(mockState());

jest.mock('../app/hooks', () => ({
    useAppSelector: mockUseAppSelector,
    useAppDispatch: () => mockUseAppDispatch
}))