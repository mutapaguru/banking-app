import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalance from '@/components/TotalBalanceBox';
import React from 'react'

function Home() {
    const loggedIn = {firstName: 'Leanon'};
    
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
           user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalance 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={250}
          />
            </header>
            </div>

            <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home