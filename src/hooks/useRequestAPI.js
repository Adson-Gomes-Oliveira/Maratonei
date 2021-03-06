import {useState, useEffect} from 'react';
import requestByPopularity from '../services/requestByPopularity';
import requestByQuery from '../services/requestByQuery';
import requestProviders from '../services/requestProviders';
import requestByProvider from '../services/requestByProvider';
import requestDetails from '../services/requestDetails';

export const useQueryAPI = (path) => {
  const [filter, setFilterQuery] = useState({search: '', year: ''});
  const [result, setResult] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await requestByQuery(path, filter.search, filter.year);

      setResult(data);
    };

    requestAPI();
  }, [filter]);

  return [result, setFilterQuery];
};

export const useProvidersAPI = () => {
  const [providerId, setProviderId] = useState('');
  const [providerResult, setProviderResult] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      const dataProviders = await requestProviders();
      const dataProvider= await requestByProvider(providerId);
      setResult(dataProviders);
      setProviderResult(dataProvider);
    };

    requestAPI();
  }, [providerId]);

  return {result, providerResult, setProviderId};
};

export const useDetailsAPI = (request) => {
  const [showId, setShowId] = useState('');
  const [result, setResult] = useState({
    cast_and_crew: [],
    genres: [],
    recomendations: [],
    release_date: '00-00-0000',
    reviews: [],
    production_companies: [],
    providers: {
      buy: [],
      flatrate: [],
      rent: [],
    },
    trailer_key: {},
  });

  const path = request.split('/', 2)[1];

  useEffect(() => {
    const requestAPI = async () => {
      const data = await requestDetails(path, showId);
      setResult(data);
    };

    if (showId) requestAPI();
  }, [showId]);

  return [result, setShowId];
};

function useRequestAPI() {
  const [request, setRequest] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await requestByPopularity(request);
      setResult(data);
    };

    requestAPI();
  }, [request]);

  const stateControllers = {
    request,
    result,
    setRequest,
    setResult,
  };


  return stateControllers;
}

export default useRequestAPI;
