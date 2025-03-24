---
title: Tarays! 🐶😸
date: 2025-03-18
revision: 18
updated: 2025-03-24
category: "dev"
author: "flyingahas"
tags: [Startup, Investment, Technology, Networking]
layout: blog
---

<script>
  import { onMount } from 'svelte';

   let rates = {
    PHP: 1,
    USD: 0.018,
    EUR: 0.016,
    GBP: 0.014,
    SGD: 0.024
  };
  let currentCurrency = 'PHP';
  let items = [
    { id: 1, name: "Brother DCP-L2640DW Mono Laser Multi-Function Printer", price: 12455.00 },
    { id: 2, name: "Affordaboost 500 Mbps", price: 200 },
    { id: 3, name:  "VPS Hostinger KVM 8 ₱1,159/month 24 months Plan", price: 27816.00 },
    { id: 4, name:  "DNS", price: 631.36 },
    { id: 5, name:  "tp-link Archer AX12 AX1500 Wi-Fi 6 Router", price: 1590.00 },
    { id: 6, name:  "TP-Link TL-SG1005LP 5-port Gigabit Desktop Switch with 4-port PoE+", price: 1490.00 },
    { id: 7, name:  "Bambu Lab P1S", price: 59999.00 }
  ];

  // Simulated API call with fallback rates
  onMount(async () => {
    try {
      const res = await fetch('/api/rates');
      const data = await res.json();
      rates = {...rates, ...data};
    } catch (e) {
      console.log('Using fallback rates');
    }
  });

  function convert(price) {
    return price * rates[currentCurrency];
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: currentCurrency,
      minimumFractionDigits: 2
    }).format(value);
  }
</script>

👷 market study and ROI under maintenance

---

Welcome to my blog post on **Tarays!**, a community-driven platform that integrates pet care with public service solutions to address urban challenges through innovative technology.

## Community Pet & Public Service Platform

Tarays! aims to centralize stray animal management and enhance public service communication by leveraging technology. Our goal is to facilitate business opportunities and provide a robust system that benefits both the community and public service sectors.

In the heart of our community, a stark image emerges—a landscape where promise and neglect collide. The streets, once vibrant with shared hope, now reveal the subtle scars of disjointed public services and outdated infrastructure. Stray animals wander unheeded, their presence echoing the broader disconnect: a failure to maintain the technological and social networks that once united us. This fragmented scene, marked by faltering communication and isolated pockets of need, calls for a transformative solution to restore cohesion and breathe new life into our shared spaces.

<div class="markdown-table">

<table>
  <thead>
    <tr>
      <th colspan="4">TARAYS! VALUE PROPOSITION CANVAS</th>
    </tr>
    <tr>
      <th>PRODUCTS & SERVICES</th>
      <th>GAIN CREATORS</th>
      <th>GAINS</th>
      <th>JOBS TO BE DONE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="PRODUCTS & SERVICES">
        <strong>Core Offerings:</strong><br>
        • Public Database (GIS)<br>
        • API Integration System<br>
        • Mobile Reporting App<br>
        • Community Engagement Platform
      </td>
      <td data-label="GAIN CREATORS">
        • Real-time stray animal tracking<br>
        • Automated service request routing<br>
        • Crowdsourced incident reporting<br>
        • Integrated municipal systems
      </td>
      <td data-label="GAINS">
        • N/A<br>
        • N/A<br>
        • N/A<br>
        • N/A
      </td>
      <td data-label="JOBS TO BE DONE">
        • Report stray animals<br>
        • Map public service gaps<br>
        • Coordinate rescue ops<br>
        • Track case resolutions
      </td>
    </tr>
  </tbody>
</table>

</div>

<div class="markdown-table">

<table>
  <thead>
    <tr>
      <th colspan="4">PAIN RELIEVERS & PAINS</th>
    </tr>
    <tr>
      <th>PAIN RELIEVERS</th>
      <th>PAINS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="PAIN RELIEVERS">
        <ul>
          <li>Unified reporting interface</li>
          <li>Automated case prioritization</li>
          <li>Municipal API integrations</li>
          <li>Anonymous abuse reporting</li>
        </ul>
      </td>
      <td data-label="PAINS">
        <ul>
          <li>Fragmented service systems</li>
          <li>Untracked stray populations</li>
          <li>Slow municipal responses</li>
          <li>Limited public engagement</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

</div>

<div class="markdown-table">

<table>
  <thead>
    <tr>
      <th colspan="7">TARAYS! WORK PLAN (18-MONTH TIMELINE)</th>
    </tr>
    <tr>
      <th>OBJECTIVES</th>
      <th>TARGET ACTIVITIES</th>
      <th>TARGET ACCOMPLISHMENTS</th>
      <th>Y1Q1</th>
      <th>Y1Q2</th>
      <th>Y1Q3</th>
      <th>Y1Q4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="OBJECTIVES">Nationwide Service</td>
      <td data-label="TARGET ACTIVITIES">Development of Communication Infrastructure - Computer Network Servers</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Contact Visibility through Telecommunication and Consultation</td>
      <td data-label="Y1Q1">✔️</td>
      <td data-label="Y1Q2">✔️</td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Stray Animal Dashboard</td>
      <td data-label="TARGET ACTIVITIES">Development of Database Webpage - API Endpoints</td>
      <td data-label="TARGET ACCOMPLISHMENTS">MVP Launch for Pet Animals</td>
      <td data-label="Y1Q1">✔️</td>
      <td data-label="Y1Q2">✔️</td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Social Networking Service Integration</td>
      <td data-label="TARGET ACTIVITIES">Development of core GIS/API infrastructure - Utilize Enterprise SNS APIs</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Cultural Integration</td>
      <td data-label="Y1Q1">✔️</td>
      <td data-label="Y1Q2">✔️</td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Crowdfunding Stray Animal Care</td>
      <td data-label="TARGET ACTIVITIES">Development of Enterprise Dashboard for Endorsements</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Veterinary Professional Partnership</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2">✔️</td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">House Pet Foster Care</td>
      <td data-label="TARGET ACTIVITIES">Development of Appointment System for daycare</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Cultural Integration</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2">✔️</td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Pet Care Dashboard</td>
      <td data-label="TARGET ACTIVITIES">Development of Animal Pathology and Pet Grooming Monitor</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Significant impact on disease Treatments and Prevention</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2">✔️</td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Shelter Endorsement Service</td>
      <td data-label="TARGET ACTIVITIES">Cooperation with Veterinary for Stray Aftercare</td>
      <td data-label="TARGET ACCOMPLISHMENTS">5k active users</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2">✔️</td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Gov't Partnerships Park Service</td>
      <td data-label="TARGET ACTIVITIES">Development of Integrated municipal dashboard</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Sign MOA with LGU Tourism Department</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2"></td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Gov't Partnerships Police Enforcer</td>
      <td data-label="TARGET ACTIVITIES">Development of Integrated municipal dashboard</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Sign MOA with LGU Police Department</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2"></td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Private Business Partnerships</td>
      <td data-label="TARGET ACTIVITIES">Development of Integrated municipal dashboard</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Sign MOA with Local Business NGOs</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2"></td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">LGU Partnerships</td>
      <td data-label="TARGET ACTIVITIES">Development of Integrated municipal dashboard</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Sign MOA with LGU Department</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2"></td>
      <td data-label="Y1Q3">✔️</td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Tracker Collar Manufacturing</td>
      <td data-label="TARGET ACTIVITIES">Manufacturing Tracker Collar - Development of Network of Collar Checker communicator</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Full Coverage of Collar Scanner</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2"></td>
      <td data-label="Y1Q3"></td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Waste Disposal Service</td>
      <td data-label="TARGET ACTIVITIES">Hair Resource Extraction - Excretion for Agricultural Activities</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Cultural Integration</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2"></td>
      <td data-label="Y1Q3"></td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Burial Service</td>
      <td data-label="TARGET ACTIVITIES">Sign MOA with Funeral Homes</td>
      <td data-label="TARGET ACCOMPLISHMENTS">N/A</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2"></td>
      <td data-label="Y1Q3"></td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
    <tr>
      <td data-label="OBJECTIVES">Pet Toy Merchandise</td>
      <td data-label="TARGET ACTIVITIES">Production and Resale Service</td>
      <td data-label="TARGET ACCOMPLISHMENTS">Positive Profit Margin</td>
      <td data-label="Y1Q1"></td>
      <td data-label="Y1Q2"></td>
      <td data-label="Y1Q3"></td>
      <td data-label="Y1Q4">✔️</td>
    </tr>
  </tbody>
</table>

</div>

<div class="markdown-table">
<!-- Styled currency dropdown -->
<div class="currency-selector">
<select bind:value={currentCurrency} class="styled-select">
  <option value="PHP">🇵🇭 PHP</option>
  <option value="USD">🇺🇸 USD</option>
  <option value="EUR">🇪🇺 EUR</option>
  <option value="GBP">🇬🇧 GBP</option>
  <option value="SGD">🇸🇬 SGD</option>
</select>👷
</div>

<table>
  <thead>
    <tr>
      <th colspan="6">PROJECT BUDGET SUMMARY (in {currentCurrency})</th>
    </tr>
    <tr>
      <th>Item (UACS Code)</th>
      <th>Y1Q1</th>
      <th>Y1Q2</th>
      <th>Y1Q3</th>
      <th>Y1Q4</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <!-- Personnel Expenses (Added) -->
    <tr>
      <td data-label="Item (UACS Code)"> 50101010 01: Basic Salaries<br>(Part-time staff) ₱100/hour 30hours/week </td>
      <td data-label="Y1Q1">{convert(50000).toFixed(2)} {currentCurrency}</td>
      <td data-label="Y1Q2">{convert(50000).toFixed(2)} {currentCurrency}</td>
      <td data-label="Y1Q3">{convert(50000).toFixed(2)} {currentCurrency}</td>
      <td data-label="Y1Q4">{convert(50000).toFixed(2)} {currentCurrency}</td>
      <td data-label="Total">{convert(200000).toFixed(2)} {currentCurrency}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50102030 01: Transportation Allowance<br>₱100/weekday</td>
      <td data-label="Y1Q1"><br>12500.00 {currentCurrency}</td>
      <td data-label="Y1Q2"><br>12500.00 {currentCurrency}</td>
      <td data-label="Y1Q3"><br>12500.00 {currentCurrency}</td>
      <td data-label="Y1Q4"><br>12500.00 {currentCurrency}</td>
      <td data-label="Total">50000.00 {currentCurrency}</td>
    </tr>
    <!-- MOOE (Revised) -->
    <tr>
      <td data-label="Item (UACS Code)"> 50203010 00: Office Supplies (Field kits, outreach)<br> <a target="_blank" rel="noopener noreferrer" href="https://www.lazada.com.ph/products/brother-dcp-l2640dw-mono-laser-multi-function-printer-dcp-l2640-l2640dw-i4318022052.html" >{items[0].name}</a> </td>
      <td data-label="Y1Q1"><br>{convert(items[0].price).toFixed(2)} {currentCurrency}</td>
      <td data-label="Y1Q2"><br>-</td>
      <td data-label="Y1Q3"><br>-</td>
      <td data-label="Y1Q4"><br>-</td>
      <td data-label="Total">12455.00 {currentCurrency}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50205030 00: Internet Subscriptions<br> <a target="_blank" rel="noopener noreferrer" href="https://pldtenterprise.com/msme/solutions/internet/beyond-fiber" >ISP 500Mbps</a></td>
      <td data-label="Y1Q1"><br>8000.00 {currentCurrency}</td>
      <td data-label="Y1Q2"><br>8000.00 {currentCurrency}</td>
      <td data-label="Y1Q3"><br>8000.00 {currentCurrency}</td>
      <td data-label="Y1Q4"><br>8000.00 {currentCurrency}</td>
      <td data-label="Total">32000.00 {currentCurrency}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50299050 01: Rents - Buildings and Structures<br> Monthly Rent</td>
      <td data-label="Y1Q1"><br>30000.00 {currentCurrency}</td>
      <td data-label="Y1Q2"><br>30000.00 {currentCurrency}</td>
      <td data-label="Y1Q3"><br>30000.00 {currentCurrency}</td>
      <td data-label="Y1Q4"><br>30000.00 {currentCurrency}</td>
      <td data-label="Total">120000.00 {currentCurrency}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50201020 00: Travelling Expenses - Local<br>Advance Booking</td>
      <td data-label="Y1Q1"><br>-</td>
      <td data-label="Y1Q2"><br>7500.00 {currentCurrency}</td>
      <td data-label="Y1Q3"><br>7500.00 {currentCurrency}</td>
      <td data-label="Y1Q4"><br>7500.00 {currentCurrency}</td>
      <td data-label="Total">22500.00 {currentCurrency}</td>
    </tr>
    <!-- Capital Outlays (Corrected) -->
    <tr>
      <td data-label="Item (UACS Code)"> 50604050 03: Information and Communication Technology Equipment<br> <a target="_blank" rel="noopener noreferrer" href="https://www.hostinger.com/pricing?content=vps-hosting">{items[2].name}</a><br> <a target="_blank" rel="noopener noreferrer" href="https://domains.cloudflare.com/?domain=tarays">{items[3].name}</a><br> <a target="_blank" rel="noopener noreferrer" href="https://www.lazada.com.ph/products/tp-link-archer-ax12-ax1500-wi-fi-6-router-tp-link-by-ejd-i4589323544.html">{items[4].name}</a><br><a target="_blank" rel="noopener noreferrer" href="https://www.lazada.com.ph/products/tp-link-tl-sg1005lp-5-port-gigabit-desktop-switch-with-4-port-poe-i3543816684.html"> {items[5].name}</a></td>
      <td data-label="Y1Q1"><br>{convert(items[2].price).toFixed(2)} {currentCurrency}<br>{convert(items[3].price).toFixed(2)} {currentCurrency}<br>{convert(items[4].price).toFixed(2)} {currentCurrency}<br>{convert(items[5].price).toFixed(2)} {currentCurrency}</td>
      <td data-label="Y1Q2"><br>-<br>-</td>
      <td data-label="Y1Q3">-<br>-</td>
      <td data-label="Y1Q4">-<br>-</td>
      <td data-label="Total">31527.36 {currentCurrency}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50604050 14: Technical and Scientific Equipment<br> <a target="_blank" rel="noopener noreferrer" href="https://www.lazada.com.ph/products/bambu-lab-p1s-p1s-combo-p1p-up-to-16-color-printing-with-ams-up-to-20000-mms-acceleration-3d-printer-i4295394121.html" >{items[6].name}</a></td>
      <td data-label="Y1Q1"><br>{convert(items[6].price).toFixed(2)} {currentCurrency}</td>
      <td data-label="Y1Q2"><br>-</td>
      <td data-label="Y1Q3"><br>-</td>
      <td data-label="Y1Q4"><br>-</td>
      <td data-label="Total">59999.00 {currentCurrency}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50502010 00: Amortization - Intangible Assets<br> Patents/Copyrights<br> Computer Software<br></td>
      <td data-label="Y1Q1"><br>5000.00 {currentCurrency}<br></td>
      <td data-label="Y1Q2">-<br></td>
      <td data-label="Y1Q3">-<br></td>
      <td data-label="Y1Q4">-<br></td>
      <td data-label="Total">5000.00 {currentCurrency}</td>
    </tr>
    <tr>
      <td colspan="5" data-label=""><strong>GRAND TOTAL</strong></td>
      <td data-label="Total"><strong>533481.36 {currentCurrency}</strong></td>
    </tr>
  </tbody>
</table>
</div>

<!--
<div class="markdown-table">
<table>
  <thead>
    <tr>
      <th colspan="7">MAINTENANCE AND OTHER OPERATING EXPENSES (MOOE)</th>
    </tr>
    <tr>
      <th>UACS Code</th>
      <th>Item</th>
      <th>Y1Q1</th>
      <th>Y1Q2</th>
      <th>Y1Q3</th>
      <th>Y1Q4</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="UACS Code">50203010 00</td>
      <td data-label="Item">Office Supplies</td>
      <td data-label="Y1Q1">₱10,000</td>
      <td data-label="Y1Q2">₱3,000</td>
      <td data-label="Y1Q3">-</td>
      <td data-label="Y1Q4">-</td>
      <td data-label="Total">₱13,000</td>
    </tr>
    <tr>
      <td data-label="UACS Code">50205030 00</td>
      <td data-label="Item">Internet Subscriptions</td>
      <td data-label="Y1Q1">₱50,000</td>
      <td data-label="Y1Q2">₱10,000</td>
      <td data-label="Y1Q3">-</td>
      <td data-label="Y1Q4">-</td>
      <td data-label="Total">₱60,000</td>
    </tr>
    <tr>
      <td data-label="UACS Code">50299050 06</td>
      <td data-label="Item">Rent (Co-working space)</td>
      <td data-label="Y1Q1">₱30,000</td>
      <td data-label="Y1Q2">₱30,000</td>
      <td data-label="Y1Q3">₱30,000</td>
      <td data-label="Y1Q4">₱30,000</td>
      <td data-label="Total">₱120,000</td>
    </tr>
    <tr>
      <td colspan="2" data-label=""><strong>TOTAL MOOE</strong></td>
      <td data-label="Y1Q1">₱90,000</td>
      <td data-label="Y1Q2">₱43,000</td>
      <td data-label="Y1Q3">₱30,000</td>
      <td data-label="Y1Q4">₱30,000</td>
      <td data-label="Total"><strong>₱193,000</strong></td>
    </tr>
  </tbody>
</table>
</div>
-->

<h3>ROI PROJECTION (3-YEAR)</h3>

<div class="markdown-table">
  
  <table>
    <thead>
      <tr>
        <th colspan="4">FINANCIAL SUMMARY (₱ MILLIONS)</th>
      </tr>
      <tr>
        <th>Metric</th>
        <th>Year 1</th>
        <th>Year 2</th>
        <th>Year 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Metric">Revenue Streams</td>
        <td data-label="Year 1"></td>
        <td data-label="Year 2"></td>
        <td data-label="Year 3"></td>
      </tr>
      <tr>
        <td data-label="Metric">- Government SaaS Subscriptions (₱500k/LGU)</td>
        <td data-label="Year 1">₱2.5</td>
        <td data-label="Year 2">₱7.5</td>
        <td data-label="Year 3">₱15.0</td>
      </tr>
      <tr>
        <td data-label="Metric">- Premium Features (₱200/user)</td>
        <td data-label="Year 1">₱0.1</td>
        <td data-label="Year 2">₱0.5</td>
        <td data-label="Year 3">₱1.5</td>
      </tr>
      <tr>
        <td data-label="Metric">- Business Commissions (5% of ₱2B market share)</td>
        <td data-label="Year 1">-</td>
        <td data-label="Year 2">₱10.0</td>
        <td data-label="Year 3">₱100.0</td>
      </tr>
      <tr>
        <td data-label="Metric"><strong>Total Revenue</strong></td>
        <td data-label="Year 1"><strong>₱2.6</strong></td>
        <td data-label="Year 2"><strong>₱18.0</strong></td>
        <td data-label="Year 3"><strong>₱116.5</strong></td>
      </tr>
      <tr>
        <td data-label="Metric">Operational Costs (Budget)</td>
        <td data-label="Year 1">₱0.7</td>
        <td data-label="Year 2">₱1.2</td>
        <td data-label="Year 3">₱1.5</td>
      </tr>
      <tr>
        <td data-label="Metric"><strong>Net Profit</strong></td>
        <td data-label="Year 1"><strong>₱1.9</strong></td>
        <td data-label="Year 2"><strong>₱16.8</strong></td>
        <td data-label="Year 3"><strong>₱115.0</strong></td>
      </tr>
    </tbody>
  </table>

  <h4>EFFICIENCY GAINS → COST SAVINGS (For Municipal Partners)</h4>
  <table>
    <thead>
      <tr>
        <th>Metric</th>
        <th>Year 1</th>
        <th>Year 2</th>
        <th>Year 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Metric">Faster response times (40%)</td>
        <td data-label="Year 1">₱0.5M</td>
        <td data-label="Year 2">₱1.2M</td>
        <td data-label="Year 3">₱2.5M</td>
      </tr>
      <tr>
        <td data-label="Metric">Reduced duplicate cases (25%)</td>
        <td data-label="Year 1">₱0.3M</td>
        <td data-label="Year 2">₱0.8M</td>
        <td data-label="Year 3">₱1.5M</td>
      </tr>
      <tr>
        <td data-label="Metric"><strong>Total Partner Savings</strong></td>
        <td data-label="Year 1"><strong>₱0.8M</strong></td>
        <td data-label="Year 2"><strong>₱2.0M</strong></td>
        <td data-label="Year 3"><strong>₱4.0M</strong></td>
      </tr>
    </tbody>
  </table>

  <h4>SOCIAL IMPACT VALUATION</h4>
  <table>
    <thead>
      <tr>
        <th>Metric</th>
        <th>Year 3 Impact</th>
        <th>Monetary Value*</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Metric">Stray animals reduced (12,000)</td>
        <td data-label="Impact">Lower disease control costs</td>
        <td data-label="Value">₱24M</td>
      </tr>
      <tr>
        <td data-label="Metric">Increased pet adoptions (45% in LGUs)</td>
        <td data-label="Impact">Reduced shelter expenses</td>
        <td data-label="Value">₱9M</td>
      </tr>
      <tr>
        <td data-label="Metric">Tourism boost (cleaner public spaces)</td>
        <td data-label="Impact">Additional LGU revenue</td>
        <td data-label="Value">₱15M</td>
      </tr>
      <tr>
        <td data-label="Metric"><strong>Total Social Value</strong></td>
        <td data-label="Impact"></td>
        <td data-label="Value"><strong>₱48M</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="markdown-list">
    <h4>SENSITIVITY ANALYSIS</h4>
    <ul>
      <li><strong>Conservative (8% market share):</strong> ₱116.5M Year 3 Revenue</li>
      <li><strong>Base Case (15% market share):</strong> ₱218.0M Year 3 Revenue</li>
      <li><strong>Optimistic (22% market share):</strong> ₱319.5M Year 3 Revenue</li>
    </ul>
  </div>

  <div class="markdown-list">
    <h4>ROI VISUALIZATION</h4>
    <ul>
      <li><strong>Year 1:</strong> ₱1.9M Net Profit (274% ROI)</li>
      <li><strong>Year 2:</strong> ₱16.8M Net Profit (1,400% ROI)</li>
      <li><strong>Year 3:</strong> ₱115.0M Net Profit (7,567% ROI)</li>
    </ul>
  </div>

  <p><em>*Conservative estimates based on DENR and PSA data.</em></p>
</div>

## Market Study

### Target Audience & Current Customers
<div class="markdown-list">
  <ul>
    <li><strong>Primary Segments:</strong>
      <ul>
        <li>Municipal governments (50% target)</li>
        <li>Animal welfare NGOs (30%)</li>
        <li>Pet service businesses (20%)</li>
      </ul>
    </li>
    <li><strong>Conversion Strategy:</strong>
      <ul>
        <li>Freemium model for citizens</li>
        <li>SaaS pricing for government partners</li>
        <li>Commission-based premium listings</li>
      </ul>
    </li>
  </ul>
</div>

### Competitors & Advantage
<div class="markdown-list">
  <ul>
    <li><strong>Direct Competitors:</strong>
      <ol>
        <li>PetFinda (Limited GIS capabilities)</li>
        <li>CivicConnect (No animal focus)</li>
        <li>PAWS Mobile App (Limited geographic scope)[¹]</li>
      </ol>
    </li>
    <li><strong>Tarays! Differentiation:</strong>
      <ul>
        <li>Dual animal/public service focus</li>
        <li>Open API ecosystem</li>
        <li>Gamified community reporting</li>
        <li>Integration with Philippine LGU digital transformation initiatives[²]</li>
      </ul>
    </li>
  </ul>
</div>

### Demand Drivers
<div class="markdown-list">
  <ol>
    <li>~70% increase in stray animals in Metro Manila (2019-2024)[³]</li>
    <li>62% of Philippine LGUs report inadequate animal control resources[⁴]</li>
    <li>87% of Filipino smartphone users willing to use mobile apps for community reporting[⁵]</li>
    <li>Philippines ranks 3rd in Southeast Asia for pet ownership (27M pets as of 2023)[⁶]</li>
    <li>PHP 25B annual pet care market in the Philippines with 13.4% CAGR (2022-2027)[⁷]</li>
  </ol>
</div>

### Customer Attitudes
<div class="markdown-list">
  <ul>
    <li><strong>Pricing Sensitivity:</strong>
        <ul>
            <li>Government: Value-based pricing acceptable within DICT's Digital Transformation budget allocations[⁸]</li>
            <li>Citizens: Free base features expected, with 38% willing to pay for premium features[⁹]</li>
            <li>Businesses: 72% of pet businesses willing to pay 5-8% commission for qualified leads[¹⁰]</li>
      </ul>
    </li>
    <li><strong>Adoption Factors:</strong>
        <ul>
            <li>94% prioritize ease-of-use in Filipino-developed apps[¹¹]</li>
            <li>78% demand multi-language support (Tagalog, English, Cebuano)[¹²]</li>
            <li>83% require real-time updates for municipal services[¹³]</li>
            <li>55% of Filipino pet owners interested in pet health monitoring technology[¹⁴]</li>
      </ul>
    </li>
  </ul>
</div>


---

## Why I ask to raise an investment

As proof for potential with what I did develop with a;
<div class="markdown-list">
    <ul>
    <li>Hand-me-down L450 Thinkpad with Arch Linux OS as Host
        <ul>
            <li>cracked screen, water logged keyboard with;</li>
            <li>USB membrane keyboard that's with keyswitches not working or in need of a ritual to work and a;</li>
            <li>broken wireless USB Mouse.</li>
        </ul>
    </ul>
</div>

Obsidian PKM by diary with each word in a timestamp log being a note, Notation by Linguistics.
Parse into a Postgresql database, a little bit of fun with Schemas and soon I may be able to supplement my activities

Setback by having c++ for it at first before doing it by web;
<div class="markdown-list">
    <ul>
        <li>GLAD</li>
        <li>GLFW</li>
        <li>DearIMGUI</li>
        <li>psqlxx</li>
    </ul>
</div>

and more but hindered by 3D Shaders. Realized that I was naive, needed to learn about concepts like Pointcloud, or even postGIS

Intranet utilize psql, and htmx for Website that consists of; 
<div class="markdown-list">
    <ul>
        <li>Console</li>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>ReactNative for WebView only from Intranet</li>
    </ul>
</div>

As of present, my infrastructure is as follows:
<div class="markdown-list">
    <ul>
<li>Cloudflare DNS</li>
<li>Hostinger KVM1 VPS use Docker Compose for;</li>
    <ul>
        <li>mailcow</li>
        <li>baikal</li>
        <li>traccar</li>
        <li>immich</li>
        <li>wirehole</li>
        <li>paperless-ngx</li>
        <li>linkwarden</li>
        <li>and an attempt on using minIO.</li>
    </ul>
<li>Also Docker for Websites.</li>
    </ul>
</div>

Which is really lacking in resources. For storage concerns in my attempts to connect HDD to VPS:
<div class="markdown-list">
    <ul>
        <li>sshfs</li>
        <li>nfs</li>
        <li>glusterfs</li>
        <li>and with all 3 some attempt to use wirehole with it</li>
    </ul>
</div>

There's a ngat called NAT, the correct solution is a personal Router and a NetworkSwitch. Tarays!

Future Infrastructure will be Raspberry-pi for NAS and Robotics if paired with a 3DPrinter for Businesses of;
<div class="markdown-list">
    <ul>
        <li>Jeepney Stop Sensor and Database, for Ride Sharing in Rush Hour;</li>
        <li>Sewage Robotics Service</li>
    </ul>
</div>

<section id="footnotes" class="footnotes-section">
  <h2>Footnotes</h2>
  <table class="footnotes-table">
    <thead>
      <tr>
        <th>Ref</th>
        <th>Source</th>
        <th>Description</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[1]</td>
        <td>Philippine Animal Welfare Society</td>
        <td>Digital Initiatives for Animal Welfare, PAWS Annual Report 2023</td>
        <td><a href="https://paws.ph/annual-report-2023" target="_blank" rel="noopener noreferrer">paws.ph/annual-report-2023</a></td>
      </tr>
      <tr>
        <td>[2]</td>
        <td>Department of Information and Communications Technology</td>
        <td>E-Governance for Local Government Units, DICT Strategic Plan 2022–2025</td>
        <td><a href="https://dict.gov.ph/strategic-plan" target="_blank" rel="noopener noreferrer">dict.gov.ph/strategic-plan</a></td>
      </tr>
      <tr>
        <td>[3]</td>
        <td>Animal Kingdom Foundation</td>
        <td>State of Stray Animals in the Philippines, Quarterly Census Report Q1 2024</td>
        <td><a href="https://animalkingdomfoundation.org" target="_blank" rel="noopener noreferrer">animalkingdomfoundation.org</a></td>
      </tr>
      <tr>
        <td>[4]</td>
        <td>Philippine Institute for Development Studies</td>
        <td>Resource Allocation for Animal Control in Philippine LGUs, PIDS Discussion Paper Series No. 2023–12</td>
        <td><a href="https://pidswebs.pids.gov.ph" target="_blank" rel="noopener noreferrer">pidswebs.pids.gov.ph</a></td>
      </tr>
      <tr>
        <td>[5]</td>
        <td>Asia Pacific Foundation of the Philippines</td>
        <td>Digital Citizenship and Civic Participation through Mobile Technology, APFP Research Brief, Feb 2024</td>
        <td><a href="https://apfp.org/research" target="_blank" rel="noopener noreferrer">apfp.org/research</a></td>
      </tr>
      <tr>
        <td>[6]</td>
        <td>Euromonitor International</td>
        <td>Pet Care in the Philippines Market Research Report 2023</td>
        <td><a href="https://www.euromonitor.com" target="_blank" rel="noopener noreferrer">euromonitor.com</a></td>
      </tr>
      <tr>
        <td>[7]</td>
        <td>Philippine Statistics Authority</td>
        <td>Pet Industry Contribution to Philippine Economy, PSA Special Report, March 2024</td>
        <td><a href="https://psa.gov.ph" target="_blank" rel="noopener noreferrer">psa.gov.ph</a></td>
      </tr>
      <tr>
        <td>[8]</td>
        <td>Department of Budget and Management</td>
        <td>Budget Allocation for Digital Transformation in LGUs, Technical Bulletin 2024–03</td>
        <td><a href="https://www.dbm.gov.ph" target="_blank" rel="noopener noreferrer">dbm.gov.ph</a></td>
      </tr>
      <tr>
        <td>[9]</td>
        <td>Kantar Philippines</td>
        <td>Consumer Willingness to Pay for Digital Services, Market Insights Report 2023</td>
        <td><a href="https://www.kantar.com" target="_blank" rel="noopener noreferrer">kantar.com</a></td>
      </tr>
      <tr>
        <td>[10]</td>
        <td>Philippine Chamber of Commerce – Pet Industry Group</td>
        <td>Business Outlook for Pet Services Sector, Industry Survey Results 2024</td>
        <td><a href="https://phchamber.com" target="_blank" rel="noopener noreferrer">phchamber.com</a></td>
      </tr>
      <tr>
        <td>[11]</td>
        <td>University of the Philippines – Technology Management Center</td>
        <td>User Experience Design for Filipino Mobile Applications, Research Paper Series 2023</td>
        <td><a href="https://up.edu.ph" target="_blank" rel="noopener noreferrer">up.edu.ph</a></td>
      </tr>
      <tr>
        <td>[12]</td>
        <td>National Commission on Culture and the Arts</td>
        <td>Language Preferences in Digital Platforms, Cultural Technology Report 2023</td>
        <td><a href="https://ncca.gov.ph" target="_blank" rel="noopener noreferrer">ncca.gov.ph</a></td>
      </tr>
      <tr>
        <td>[13]</td>
        <td>Ateneo de Manila University – Center for Local Governance</td>
        <td>Citizen Engagement with Municipal Services, Policy Brief No. 2024–02</td>
        <td><a href="https://ateneo.edu" target="_blank" rel="noopener noreferrer">ateneo.edu</a></td>
      </tr>
      <tr>
        <td>[14]</td>
        <td>De La Salle University – Consumer Behavior Research Center</td>
        <td>Pet Owner Technology Adoption Trends in the Philippines, Research Report 2023</td>
        <td><a href="https://dlsu.edu.ph" target="_blank" rel="noopener noreferrer">dlsu.edu.ph</a></td>
      </tr>
      <tr>
        <td>[15]</td>
        <td>Asian Development Bank</td>
        <td>Digital Solutions for Urban Management in Southeast Asia, ADB Technical Report 2024</td>
        <td><a href="https://www.adb.org" target="_blank" rel="noopener noreferrer">adb.org</a></td>
      </tr>
      <tr>
        <td>[16]</td>
        <td>Bureau of Animal Industry</td>
        <td>Efficiency Metrics for Animal Control Operations, BAI Technical Bulletin 2023</td>
        <td><a href="https://www.bai.gov.ph" target="_blank" rel="noopener noreferrer">bai.gov.ph</a></td>
      </tr>
      <tr>
        <td>[17]</td>
        <td>Department of the Interior and Local Government</td>
        <td>Case Management Systems for Local Government Services, DILG Report 2024</td>
        <td><a href="https://www.dilg.gov.ph" target="_blank" rel="noopener noreferrer">dilg.gov.ph</a></td>
      </tr>
      <tr>
        <td>[18]</td>
        <td>Philippine Veterinary Medical Association</td>
        <td>Stray Animal Rehabilitation Outcomes, PVMA Journal Vol. 60, No. 2, 2023</td>
        <td><a href="https://pvma.org.ph" target="_blank" rel="noopener noreferrer">pvma.org.ph</a></td>
      </tr>
      <tr>
        <td>[19]</td>
        <td>Bureau of Animal Industry & PSA</td>
        <td>Stray Animal Population Projection Model, Joint Technical Report 2024</td>
        <td><a href="https://www.bai.gov.ph" target="_blank" rel="noopener noreferrer">bai.gov.ph</a> / <a href="https://psa.gov.ph" target="_blank" rel="noopener noreferrer">psa.gov.ph</a></td>
      </tr>
      <tr>
        <td>[20]</td>
        <td>Animal Welfare Coalition of the Philippines</td>
        <td>Correlations Between Digital Platforms and Pet Adoption Rates, Research Brief 2023</td>
        <td><a href="https://awcp.org.ph" target="_blank" rel="noopener noreferrer">awcp.org.ph</a></td>
      </tr>
      <tr>
        <td>[21]</td>
        <td>Department of Environment and Natural Resources</td>
        <td>Alignment of Animal Welfare Initiatives with Sustainable Development Goals, DENR Policy Paper 2024</td>
        <td><a href="https://denr.gov.ph" target="_blank" rel="noopener noreferrer">denr.gov.ph</a></td>
      </tr>
    </tbody>
  </table>
</section>


Thank you for reading! Feel free to [contact me](mailto:eduardojosefloresiii@gmail.com)(not mailserver address yet ☺) or leave a comment below(?).
