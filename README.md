# Evmos Datahub

Evmos-related datahub inspired by the “git scraping” approach for flat data. More reliable data endpoints for projects that do not require real-time metrics, evmos-datahub aims to lighten the load on public RPC endpoints by offering an alternative source.

<!-- ROADMAP -->
## Roadmap

- [x] Separate actions by cron times
- [x] Add Proposal and Validator data
- [ ] Refactor / re-organize structure 
- [ ] Simple API
- [ ] More post-processing scripts

## Planned Collections
- [x] Market Data 
- [ ] Simplified Sentiment Data
- [ ] GitHub Activity
- [ ] Commonwealth Engagement & Growth
    - [ ] Active Addresses Per Day
    - [ ] New Comments
    - [ ] New Threads
- [ ] Weekly Community & Gov Call Data 
- [ ] Governance & Proposal Engagement
- [ ] Cosmos SDK Datapoints
    - [x] Community Pool / Treasury Holdings `Updated Every 4hrs`
    - [x] Evmos IBC Denoms `Updated Every 24hrs`
    - [x] Proposals Data `Updated Every 24hrs`
    - [x] Validators Data `Updated Every 24hrs`

## Post-Processing and Data Cleaning/Formatting

WIP

### Previewing Unprocessed Raw Data

![1665328283625](https://user-images.githubusercontent.com/16395727/194764536-6b976a09-a3bc-432d-b411-e494dfec87fe.png)

[Flat Viewer](https://flatgithub.com/EvmosGov/evmos-datahub?filename=evmos-market-1h-unprocessed.json&sha=dfaa7a8f9c85af51c7afbabf3df8f34320830bdb&tab=market_cap_rank)



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/newphonewhodis`)
3. Commit your Changes (`git commit -m 'Add new data point'`)
4. Push to the Branch (`git push origin feature/newphonewhodis`)
5. Open a Pull Request
