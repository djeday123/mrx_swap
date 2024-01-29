import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { useConfig } from '@usedapp/core';

import { ROUTER_ADDRESS } from '../config';
import { providers } from 'ethers';

export const loadPools = async (providerUrl) => {
    const provider = new Web3.providers.HttpProvider(providerUrl);
    
}

export const usePools = () => {
    const { readOnlyChainId, readOnlyUrls } = useConfig();
    const [loading, setLoading] = useState(true);
    const [pools, setPools] = useState({});

    useEffect(() => {
        loadPools(readOnlyUrls[readOnlyChainId])
            .then((pools) => {
                setPools(pools);
                setLoading(false);
            })
    }, [readOnlyUrls, readOnlyChainId])

    return [loading, pools]
}