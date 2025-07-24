import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import store from '~/store';

export default function useMockMode(propUseMock?: boolean) {
  const [useMock, setUseMock] = useRecoilState(store.useMock);

  useEffect(() => {
    if (propUseMock !== undefined) {
      setUseMock(propUseMock);
    }
  }, [propUseMock, setUseMock]);

  useEffect(() => {
    window.__USE_MOCK__ = useMock;
  }, [useMock]);

  const toggleMock = () => setUseMock((prev) => !prev);

  return { useMock, toggleMock };
}
