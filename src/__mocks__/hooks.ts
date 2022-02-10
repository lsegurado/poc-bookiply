// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<> = useSelector;

import { TypedUseSelectorHook } from "react-redux"
import { RootState } from "../app/store"
import { mockState } from "../__fixtures__/state"

const mockUseAppDispatch = jest.fn();

const useAppSelector: TypedUseSelectorHook<RootState> = (func) => func(mockState);

jest.mock('../app/hooks', () => ({
    useAppSelector,
    useAppDispatch: () => mockUseAppDispatch
}))