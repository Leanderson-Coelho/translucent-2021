import { useSelector } from 'react-redux';
import i18n from '../config/i18n';
import { RootState } from '../redux';

const useUpdateLocation = (): string => {
  const locale = useSelector((state: RootState) => state.location.data);
  i18n.locale = locale;
  return locale;
};

export default useUpdateLocation;
