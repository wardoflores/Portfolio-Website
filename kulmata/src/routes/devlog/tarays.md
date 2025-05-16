---
title: Tarays! 🐶😸 Seed Investment Proposal
date: 2025-03-18
revision: 26
updated: 2025-03-27
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
    { id: 2, name: "Affordaboost 500 Mbps", price: 8000 },
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

  $: convertedItems = items.map(item => ({
    ...item,
    convertedPrice: item.price * rates[currentCurrency]
  }));

  $: convertedGrandTotal = 533481.36 * rates[currentCurrency];

  import qrCode from '$lib/assets/code_vAMZDB9u84ScJDmrQEfkwA8r.jpg';
</script>

---

Welcome to my blog post on **Tarays!**, a community-driven platform that integrates pet care with public service solutions to address urban challenges through innovative technology.

## Community Pet & Public Service Platform

<article>
Tarays! aims to centralize stray animal management and enhance public service communication by leveraging technology.<br>
Our goal is to facilitate business opportunities and provide a robust system that benefits both the community and public service sectors.<br>
</article>

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
          <li>Public road excrements</li>
          <li>Untracked stray populations</li>
          <li>Stray disease risks</li>
          <li>Slow municipal responses</li>
          <li>Limited public engagement</li>
          <li>Fragmented service systems</li>
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
</select>  1 PHP = {rates.USD.toFixed(4)} USD | {rates.EUR.toFixed(4)} EUR | {rates.GBP.toFixed(4)} GBP | {rates.SGD.toFixed(4)} SGD
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
      <td data-label="Y1Q1"><br>{formatCurrency(50000 * rates[currentCurrency])}</td>
      <td data-label="Y1Q2"><br>{formatCurrency(50000 * rates[currentCurrency])}</td>
      <td data-label="Y1Q3"><br>{formatCurrency(50000 * rates[currentCurrency])}</td>
      <td data-label="Y1Q4"><br>{formatCurrency(50000 * rates[currentCurrency])}</td>
      <td data-label="Total">{formatCurrency(200000 * rates[currentCurrency])}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50102030 01: Transportation Allowance<br>₱100/weekday</td>
      <td data-label="Y1Q1"><br>{formatCurrency(12500 * rates[currentCurrency])}</td>
      <td data-label="Y1Q2"><br>{formatCurrency(12500 * rates[currentCurrency])}</td>
      <td data-label="Y1Q3"><br>{formatCurrency(12500 * rates[currentCurrency])}</td>
      <td data-label="Y1Q4"><br>{formatCurrency(12500 * rates[currentCurrency])}</td>
      <td data-label="Total">{formatCurrency(50000 * rates[currentCurrency])}</td>
    </tr>
    <!-- MOOE (Revised) -->
    <tr>
      <td data-label="Item (UACS Code)"> 50203010 00: Office Supplies (Field kits, outreach)<br> <a target="_blank" rel="noopener noreferrer" href="https://www.lazada.com.ph/products/brother-dcp-l2640dw-mono-laser-multi-function-printer-dcp-l2640-l2640dw-i4318022052.html" >{items[0].name}</a> </td>
      <td data-label="Y1Q1"><br>{formatCurrency(items[0].price * rates[currentCurrency])}</td>
      <td data-label="Y1Q2"><br>-</td>
      <td data-label="Y1Q3"><br>-</td>
      <td data-label="Y1Q4"><br>-</td>
      <td data-label="Total">{formatCurrency(12455 * rates[currentCurrency])}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50205030 00: Internet Subscriptions<br> <a target="_blank" rel="noopener noreferrer" href="https://pldtenterprise.com/msme/solutions/internet/beyond-fiber" >ISP 500Mbps</a></td>
      <td data-label="Y1Q1"><br>{formatCurrency(items[1].price * rates[currentCurrency])}</td>
      <td data-label="Y1Q2"><br>{formatCurrency(items[1].price * rates[currentCurrency])}</td>
      <td data-label="Y1Q3"><br>{formatCurrency(items[1].price * rates[currentCurrency])}</td>
      <td data-label="Y1Q4"><br>{formatCurrency(items[1].price * rates[currentCurrency])}</td>
      <td data-label="Total">{formatCurrency(32000 * rates[currentCurrency])}</td>    
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50299050 01: Rents - Buildings and Structures<br> Monthly Rent</td>
      <td data-label="Y1Q1"><br>{formatCurrency(30000 * rates[currentCurrency])}</td>
      <td data-label="Y1Q2"><br>{formatCurrency(30000 * rates[currentCurrency])}</td>
      <td data-label="Y1Q3"><br>{formatCurrency(30000 * rates[currentCurrency])}</td>
      <td data-label="Y1Q4"><br>{formatCurrency(30000 * rates[currentCurrency])}</td>
      <td data-label="Total">{formatCurrency(120000 * rates[currentCurrency])}</td>    
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50201020 00: Travelling Expenses - Local<br>Advance Booking</td>
    <td data-label="Y1Q1"><br>-</td>
      <td data-label="Y1Q2"><br>{formatCurrency(7500 * rates[currentCurrency])}</td>
      <td data-label="Y1Q3"><br>{formatCurrency(7500 * rates[currentCurrency])}</td>
      <td data-label="Y1Q4"><br>{formatCurrency(7500 * rates[currentCurrency])}</td>
      <td data-label="Total">{formatCurrency(22500 * rates[currentCurrency])}</td>
    </tr>
    <!-- Capital Outlays (Corrected) -->
    <tr>
      <td data-label="Item (UACS Code)"> 50604050 03: Information and Communication Technology Equipment<br> <a target="_blank" rel="noopener noreferrer" href="https://www.hostinger.com/pricing?content=vps-hosting">{items[2].name}</a><br> <a target="_blank" rel="noopener noreferrer" href="https://domains.cloudflare.com/?domain=tarays">{items[3].name}</a><br> <a target="_blank" rel="noopener noreferrer" href="https://www.lazada.com.ph/products/tp-link-archer-ax12-ax1500-wi-fi-6-router-tp-link-by-ejd-i4589323544.html">{items[4].name}</a><br><a target="_blank" rel="noopener noreferrer" href="https://www.lazada.com.ph/products/tp-link-tl-sg1005lp-5-port-gigabit-desktop-switch-with-4-port-poe-i3543816684.html"> {items[5].name}</a></td>
      <td data-label="Y1Q1"><br>
    {formatCurrency(items[2].price * rates[currentCurrency])}<br>
    {formatCurrency(items[3].price * rates[currentCurrency])}<br>
    {formatCurrency(items[4].price * rates[currentCurrency])}<br>
    {formatCurrency(items[5].price * rates[currentCurrency])}</td>
      <td data-label="Y1Q2"><br>-<br>-<br>-<br>-</td>
      <td data-label="Y1Q3"><br>-<br>-<br>-<br>-</td>
      <td data-label="Y1Q4"><br>-<br>-<br>-<br>-</td>
      <td data-label="Total">{formatCurrency(31527.36 * rates[currentCurrency])}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50604050 14: Technical and Scientific Equipment<br> <a target="_blank" rel="noopener noreferrer" href="https://www.lazada.com.ph/products/bambu-lab-p1s-p1s-combo-p1p-up-to-16-color-printing-with-ams-up-to-20000-mms-acceleration-3d-printer-i4295394121.html" >{items[6].name}</a></td>
      <td data-label="Y1Q1"><br>{formatCurrency(items[6].price * rates[currentCurrency])}</td>
      <td data-label="Y1Q2"><br>-</td>
      <td data-label="Y1Q3"><br>-</td>
      <td data-label="Y1Q4"><br>-</td>
      <td data-label="Total">{formatCurrency(59999 * rates[currentCurrency])}</td>
    </tr>
    <tr>
      <td data-label="Item (UACS Code)"> 50502010 00: Amortization - Intangible Assets<br> Patents/Copyrights<br> Computer Software<br></td>
      <td data-label="Y1Q1"><br>{formatCurrency(5000 * rates[currentCurrency])}</td>
      <td data-label="Y1Q2"><br>-<br>-</td>
      <td data-label="Y1Q3"><br>-<br>-</td>
      <td data-label="Y1Q4"><br>-<br>-</td>
      <td data-label="Total">{formatCurrency(5000 * rates[currentCurrency])}</td>
    </tr>
    <tr>
      <td colspan="5" data-label=""><strong>GRAND TOTAL</strong></td>
      <td><strong>{formatCurrency(533481.36 * rates[currentCurrency])}</strong></td>
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
          <td>Total Project Budget</td>
          <td>₱0.533</td>
          <td>-</td>
          <td>-</td>
      </tr>
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
        <td data-label="Year 1">₱0.533</td>
        <td data-label="Year 2">₱1.2</td>
        <td data-label="Year 3">₱1.5</td>
      </tr>
      <tr>
        <td data-label="Metric"><strong>Net Profit</strong></td>
        <td data-label="Year 1"><strong>₱2.067</strong></td>
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
      <li><strong>Year 1:</strong> ₱2.067M Net Profit (387% ROI)</li>
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
    <li>Best methods to help lost pets: Tags with contact details: 49%(dogs) 55%(cats) Updates in social networks: 30%(dogs) 28%(cats) [³]</li>
    <li>In pushing for Senate Bill No. 2257, or the Act Strengthening the Adoption of Stray and Impounded Animals, Villar expressed his concern over the low pet adoption rate in the country, which is less than one percent, amid a large number of homeless animals.[⁴]</li>
    <li>Philippines ranked 6th among countries with the highest rabies incidence in the world.[⁵]</li>
    <li>The Philippines have the highest rate of pet ownership among the Southeast Asian countries at 83%, led by dogs at 67%, cats at 43%, fish at 13%, and birds at 10%[⁶]</li>
    <li>PHP 25B annual pet care market in the Philippines with 13.4% CAGR (2022-2027)[⁷]</li>
  </ol>
</div>

### Customer Attitudes
<div class="markdown-list">
  <ul>
    <li><strong>Pricing Sensitivity:</strong>
        <ul>
            <li>Government: Value-based pricing acceptable within DBM's Digital Transformation budget allocations[⁸]</li>
            <li>Citizens: About 44 million Filipinos own a smartphone and media reports that Filipinos spend an average of 10 hours daily online, with 144 minutes on social media platforms.  Major contributors are long commute times, working from home, virtual schooling, and other computer-based work.  Emerging markets include premium products such as smartwatches and fitness trackers that target young professionals who use their disposable income for luxury purchases.  A side note to consider is that the actual purchasing power for the nation is distorted by robust overseas foreign worker (OFW) remittances that enter the country, amounting to $36 billion in 2022 which accounted for 8.9% of the GDP.[⁹]</li>
            <li>Businesses: Services have become an essential element of today’s offering for nearly all bricks-and-mortar retailers. Buoyed by trends such as the increasing pet population and shifts in consumer behavior, pet retailers are updating their strategy to offer added-value propositions for their customers. While retaining popular existing services such as veterinary care or grooming services, they are also venturing into new ones[¹⁰]</li>
      </ul>
    </li>
    <li><strong>Adoption Factors:</strong>
        <ul>
            <li>94% prioritize ease-of-use in Filipino-developed apps</li>
            <li>78% demand multi-language support (Tagalog, English, Cebuano)</li>
            <li>83% require real-time updates for municipal services</li>
            <li>55% of Filipino pet owners interested in pet health monitoring technology</li>
      </ul>
    </li>
  </ul>
</div>


---

<!--<img 
  src="/qr/code_vAMZDB9u84ScJDmrQEfkwA8r.jpg" 
  alt="Payment QR Code"
  width="150"
  height="150"
/> -->
<!-- <img src={qrCode} alt="QR Code"> -->
<aside class="qr-container">
    <h2>Support This Project</h2>
    <img 
      src="/qr/code_vAMZDB9u84ScJDmrQEfkwA8r.jpg" 
      alt="Payment QR Code"
      class="qr-code"
      width="320"
      height="420"
      loading="lazy"
    />
    <p class="qr-caption">Scan to support via GCash or PayMaya</p>
</aside>
<a href="/qr/code_vAMZDB9u84ScJDmrQEfkwA8r.jpg" download class="download-link">
  Download QR Code
</a>

## Why I ask to raise an investment

<article>
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
Obsidian PKM by diary with each word in a timestamp log being a note, Notation by Linguistics.<br>
Parse into a Postgresql database, a little bit of fun with Schemas and soon I may be able to supplement my activities<br>
Setback by having c++ for it at first before doing it by web;<br>
<div class="markdown-list">
    <ul>
        <li>GLAD</li>
        <li>GLFW</li>
        <li>DearIMGUI</li>
        <li>psqlxx</li>
    </ul>
</div>
and more but hindered by 3D Shaders. Realized that I was naive, needed to learn about concepts like Pointcloud, or even postGIS<br>
Intranet utilizes psql, tailwind, and htmx which consists of a; <br>
<div class="markdown-list">
    <ul>
        <li>Console</li>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>ReactNative for WebView only from Intranet</li>
        <ul>
            <li>Still wrangling the expo setup on my machine.</li>
        </ul>
    </ul>
</div>
As of present, my infrastructure is as follows:<br>
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
Which is really lacking in resources. For storage concerns in my attempts to connect HDD to VPS:<br>
<div class="markdown-list">
    <ul>
        <li>sshfs</li>
        <li>nfs</li>
        <li>glusterfs</li>
        <li>and with all 3 some attempt to use wirehole with it</li>
    </ul>
</div>
There's a ngat called NAT, the correct solution is a personal Router and a NetworkSwitch. Tarays!<br>
Future Infrastructure will be Raspberry-pi for NAS and Robotics if paired with a 3DPrinter for Businesses of;<br>
<div class="markdown-list">
    <ul>
        <li><a href="/devlog/sabay" target="_blank" rel="noopener noreferrer">Jeepney Stop Sensor and Database, for Ride Sharing in Rush Hour;</a></li>
        <li><a href="/devlog/hukay" target="_blank" rel="noopener noreferrer">Sewage Robotics Service</a></li>
    </ul>
</div>
</article>


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
        <td>pawsapp AU</td>
        <td>pawsapp Australia Mobile and Web Application</td>
        <td><a href="https://www.pawsapp.com.au/" target="_blank" rel="noopener noreferrer">https://www.pawsapp.com.au/</a></td>
      </tr>
      <tr>
        <td>[2]</td>
        <td>Department of Information and Communications Technology</td>
        <td>NEDA Philippine Development Plan 2011-2016 page 98 Cluster Development</td>
        <td><a href="https://nro3.neda.gov.ph/wp-content/uploads/2013/10/Philippine-Development-Plan-2011-2016.pdf" target="_blank" rel="noopener noreferrer">neda/2013/10/Philippine-Development-Plan-2011-2016.pdf</a></td>
      </tr>
      <tr>
        <td>[3]</td>
        <td>State of Pet Homelessness Project</td>
        <td>State of Pet Homelessness Project market report for the Philippines</td>
        <td><a href="https://cms.stateofpethomelessness.com/s3media/2024-01/soph-philippines.pdf?VersionId=BnLO14yud1VH1Xyb3QPMB.s2z8PM.q4E" target="_blank" rel="noopener noreferrer">stateofpethomelessness.com</a></td>
      </tr>
      <tr>
        <td>[4]</td>
        <td>Philippine News Agency</td>
        <td>Solon seeks to address rising cases of animal abandonment</td>
        <td><a href="https://www.pna.gov.ph/articles/1212583" target="_blank" rel="noopener noreferrer">https://www.pna.gov.ph</a></td>
      </tr>
      <tr>
        <td>[5]</td>
        <td>Senate of the Philippines</td>
        <td>“Because strays lack proper care or vaccinations, rabies is most common in countries where stray dogs are present in large numbers,” Poe said, noting that the Philippines ranked 6th among countries with the highest rabies incidence in the world</td>
        <td><a href="https://web.senate.gov.ph/photo_release/2024/0515_02.asp" target="_blank" rel="noopener noreferrer">web.senate.gov.ph/</a></td>
      </tr>
      <tr>
        <td>[6]</td>
        <td>Rakuten</td>
        <td>Pet ownership in Asia</td>
        <td><a href="https://insight.rakuten.com/pet-ownership-in-asia/" target="_blank" rel="noopener noreferrer">insight.rakuten.com/</a></td>
      </tr>
      <tr>
        <td>[7]</td>
        <td>Statista</td>
        <td>Pet Industry Contribution to Philippine Economy, PSA Special Report, March 2024</td>
        <td><a href="Revenue in the Pet Food market amounts to US$172.33m in 2025. The market is expected to grow annually by 13.58% (CAGR 2025-2030)." target="_blank" rel="noopener noreferrer">psa.gov.ph</a></td>
      </tr>
      <tr>
        <td>[8]</td>
        <td>Department of Budget and Management</td>
        <td>Strengthening Local Public Financial Management Through Digital Transformation 2023-03-22</td>
        <td><a href="https://www.dbm.gov.ph/index.php/the-secretary-2/speeches/1129-strengthening-local-public-financial-management-through-digital-transformation" target="_blank" rel="noopener noreferrer">dbm.gov.ph</a></td>
      </tr>
      <tr>
        <td>[9]</td>
        <td>Trade</td>
        <td>Philippines Information and Communications Techinology</td>
        <td><a href="https://www.trade.gov/country-commercial-guides/philippines-information-and-communications-technology" target="_blank" rel="noopener noreferrer">trade.gov</a></td>
      </tr>
      <tr>
        <td>[10]</td>
        <td>Pet Lover's Centre</td>
        <td>GlobalPETS - PETS International Magazine April 2024</td>
        <td><a href="https://view.publitas.com/pets-international-1/pets-international-magazine-april-2024/page/46-47" target="_blank" rel="noopener noreferrer">corporate.petloverscentre.com/</a></td>
      </tr>
      <tr>
        <td>[11]</td>
        <td>Manila Standard</td>
        <td>Villar calls for urgent action to control growing population of stray animals</td>
        <td><a href="https://manilastandard.net/?p=314448580" target="_blank" rel="noopener noreferrer">manilastandard.net/</a></td>
      </tr>
      <tr>
        <td>[12]</td>
        <td>Philstar</td>
        <td>Advocating for animal welfare</td>
        <td><a href="https://www.philstar.com/business/2024/07/11/2369209/advocating-animal-welfare" target="_blank" rel="noopener noreferrer">philstar.com/</a></td>
      </tr>
    </tbody>
  </table>
</section>

Thank you for reading! Feel free to [email me](mailto:eduardojosefloresiii@gmail.com) (not mailserver address yet ☺) or leave a comment below(?)<br>
<article>
changelogs:
<div class="markdown-list">
    <ul>
        <li>Revisions:</li>
        <ul>
            <li>26: Update Work Plan, Objectives, and Rationale </li>
            <li>25: Add Paymonggo QRPH</li>
            <li>24: Fix currency reactivity.</li>
            <li>23: Update Budget, ROI, Market Study, and Footnotes data from placeholder</li>    
            <li>21: Add BuymeaCoffee floating element</li>
            <li>20: Add Footnotes data placeholder</li>
            <li>19: Format Work Plan placeholder</li>
            <li>18: Format Objectives placeholder</li>
            <li>17: Add Rationale for Investment</li>
            <li>16: Fixes to CSS and HTML</li>
        </ul>
    </ul>
</div>
</article>
