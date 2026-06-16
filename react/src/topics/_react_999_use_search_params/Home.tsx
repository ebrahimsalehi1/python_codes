import { useSearchParams } from 'react-router-dom';
import { SelectItems } from './SelectItems';

const QUERY1 = 'field1';
export const Home = () => {
  const [searchParams, setSearchParams] =
    useSearchParams();
  const field1Value =
    searchParams.get(QUERY1)?.trim() ||
    undefined;

  return (
    <div>
      Home {field1Value ?? 'NOTHING'}
      <div>
        <SelectItems
          value={field1Value ?? ''}
          onChange={(text) =>
            text === 'none'
              ? setSearchParams('')
              : setSearchParams(
                  `?${QUERY1}=${text}`,
                )
          }
        />

        <div>
          Search Params: {searchParams}
        </div>
      </div>
    </div>
  );
};
