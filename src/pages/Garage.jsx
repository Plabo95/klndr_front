import React, {useEffect, useContext} from 'react'
import ClientsTable from '../tables/ClientsTable'
import ServicesTable from '../tables/ServicesTable'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Heading } from '@chakra-ui/react'
import EventsTable from '../tables/EventsTable'


function Garage(){
    
    return(
        <>
        <Flex w="100%" direction={'column'} minH='100vh' bg='mygray' align='center'>
        <Flex py='4' justify={'start'} w='80%'>
            <Heading>Mi taller</Heading>
        </Flex>
        <Flex w='80%' align='center' >
        <Tabs variant='unstyled' colorScheme='orange' w='100%'>
            <TabList >
                <Tab px='10' _selected={{ color: 'white', bg: 'blue', rounded: 'xl' }} >Citas</Tab>
                <Tab px='10' _selected={{ color: 'white', bg: 'blue', rounded: 'xl' }}>Servicios</Tab>
                <Tab px='10' _selected={{ color: 'white', bg: 'blue', rounded: 'xl' }}>Clientes</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <EventsTable/>
                </TabPanel>
                <TabPanel>
                    <ServicesTable/>
                </TabPanel>
                <TabPanel>
                    <ClientsTable/>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </Flex>
        </Flex> 
        </>
    );
}

export default Garage;