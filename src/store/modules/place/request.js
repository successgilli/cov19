export default {
  fetchCovidReport: async () => {
    try {
      const url = 'https://api.covid19api.com/summary';
      const response = await fetch(url);
      const resJson = await response.json();

      const { Global, ...requiredVals } = resJson;

      return requiredVals;
    } catch (error) {
      return [];
    }
  },
  fetchStateReport: async () => {
    try {
      const url = 'https://covid19project.org.ng/api/endpoints/states';
      const response = await fetch(url);
      const resJson = await response.json();
      const { Covid19NG } = resJson;

      const formatedStates = Covid19NG.map((item) => {
        const {
          name, cases, recovered, death,
        } = item;

        return {
          Country: `${name} NG`,
          TotalConfirmed: parseInt(cases, 10),
          TotalDeaths: parseInt(death, 10),
          TotalRecovered: parseInt(recovered, 10),
        };
      });

      return formatedStates;
    } catch (error) {
      return [];
    }
  },
};
