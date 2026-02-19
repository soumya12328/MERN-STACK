'use client'
import React from 'react'

const pricing = () => {
  return (
    <div>
        {/* Pricing */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Title */}
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-foreground">Find the right plan for your team</h2>
    <p className="mt-1 text-muted-foreground-2">Pay as you go service, cancel anytime.</p>
  </div>
  {/* End Title */}

  {/* Grid */}
  <div className="relative before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(closest-side,var(--color-surface-1),transparent)] mt-12">
    <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
      {/* Card */}
      <div className="flex flex-col h-full text-center">
        <div className="bg-card pt-8 pb-5 px-8">
          <h4 className="font-medium text-lg text-foreground">Free</h4>
        </div>

        <div className="h-full bg-card lg:mt-px lg:py-5 px-8">
          <span className="mt-7 font-bold text-5xl text-foreground">
            Free
          </span>
        </div>

        <div className="bg-card flex justify-center lg:mt-px pt-7 px-8">
          <ul className="space-y-2.5 text-center text-sm">
            <li className="text-foreground">
              1 user
            </li>

            <li className="text-foreground">
              Plan features
            </li>

            <li className="text-foreground">
              Product support
            </li>
          </ul>
        </div>

        <div className="bg-card py-8 px-8">
          <a className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-primary text-primary hover:border-primary-hover hover:text-primary-hover focus:outline-hidden focus:border-primary-focus focus:text-primary-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
            Sign up
          </a>
        </div>
      </div>
      {/* End Card */}

      {/* Card */}
      <div className="flex flex-col h-full text-center">
        <div className="bg-card pt-8 pb-5 px-8">
          <h4 className="font-medium text-lg text-foreground">Startup</h4>
        </div>

        <div className="h-full bg-card lg:mt-px lg:py-5 px-8">
          <span className="mt-7 font-bold text-5xl text-foreground">
            <span className="font-bold text-2xl -me-2">$</span>
            39
          </span>
        </div>

        <div className="bg-card flex justify-center lg:mt-px pt-7 px-8">
          <ul className="space-y-2.5 text-center text-sm">
            <li className="text-foreground">
              2 users
            </li>

            <li className="text-foreground">
              Plan features
            </li>

            <li className="text-foreground">
              Product support
            </li>
          </ul>
        </div>

        <div className="bg-card py-8 px-8">
          <a className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-primary text-primary hover:border-primary-hover hover:text-primary-hover focus:outline-hidden focus:border-primary-focus focus:text-primary-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
            Sign up
          </a>
        </div>
      </div>
      {/* End Card */}

      {/* Card */}
      <div className="flex flex-col h-full text-center">
        <div className="bg-card pt-8 pb-5 px-8">
          <h4 className="font-medium text-lg text-foreground">Team</h4>
        </div>

        <div className="h-full bg-card lg:mt-px lg:py-5 px-8">
          <span className="mt-7 font-bold text-5xl text-foreground">
            <span className="font-bold text-2xl -me-2">$</span>
            89
          </span>
        </div>

        <div className="bg-card flex justify-center lg:mt-px pt-7 px-8">
          <ul className="space-y-2.5 text-center text-sm">
            <li className="text-foreground">
              5 users
            </li>

            <li className="text-foreground">
              Plan features
            </li>

            <li className="text-foreground">
              Product support
            </li>
          </ul>
        </div>

        <div className="bg-card py-8 px-8">
          <a className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-primary text-primary hover:border-primary-hover hover:text-primary-hover focus:outline-hidden focus:border-primary-focus focus:text-primary-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
            Sign up
          </a>
        </div>
      </div>
      {/* End Card */}

      {/* Card */}
      <div className="flex flex-col h-full text-center">
        <div className="bg-card pt-8 pb-5 px-8">
          <h4 className="font-medium text-lg text-foreground">Enterprise</h4>
        </div>

        <div className="h-full bg-card lg:mt-px lg:py-5 px-8">
          <span className="mt-7 font-bold text-5xl text-foreground">
            <span className="font-bold text-2xl -me-2">$</span>
            149
          </span>
        </div>

        <div className="bg-card flex justify-center lg:mt-px pt-7 px-8">
          <ul className="space-y-2.5 text-center text-sm">
            <li className="text-foreground">
              10 users
            </li>

            <li className="text-foreground">
              Plan features
            </li>

            <li className="text-foreground">
              Product support
            </li>
          </ul>
        </div>

        <div className="bg-card py-8 px-8">
          <a className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-primary text-primary hover:border-primary-hover hover:text-primary-hover focus:outline-hidden focus:border-primary-focus focus:text-primary-focus disabled:opacity-50 disabled:pointer-events-none" href="#">
            Sign up
          </a>
        </div>
      </div>
      {/* End Card */}
    </div>
  </div>
  {/* End Grid */}

  {/* Comparison table */}
  <div className="mt-20">
    <div id="hs-pricing-comparison-content" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-pricing-comparison" role="region">
      {/* xs to lg */}
      <div className="space-y-24 lg:hidden">
        <section>
          <div className="px-4 mb-4">
            <h2 className="text-lg leading-6 font-medium text-foreground">Free</h2>
          </div>
          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              Financial data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Open/High/Low/Close</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Price-volume difference indicator</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              On-chain data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Network growth</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Average token age consumed</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Exchange flow</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total ERC20 exchange funds flow</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Transaction volume</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total circulation (beta)</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Velocity of tokens (beta)</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">ETH gas used</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              Social data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Dev activity</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Topic search</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Relative social dominance</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total social volume</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <div className="px-4 mb-4">
            <h2 className="text-lg leading-6 font-medium text-foreground">Startup</h2>
          </div>
          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              Financial data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Open/High/Low/Close</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Price-volume difference indicator</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              On-chain data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Network growth</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Average token age consumed</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Exchange flow</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total ERC20 exchange funds flow</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Transaction volume</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total circulation (beta)</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Velocity of tokens (beta)</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">ETH gas used</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              Social data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Dev activity</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Topic search</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Relative social dominance</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total social volume</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <div className="px-4 mb-4">
            <h2 className="text-lg leading-6 font-medium text-foreground">Team</h2>
          </div>
          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              Financial data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Open/High/Low/Close</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Price-volume difference indicator</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              On-chain data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Network growth</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Average token age consumed</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Exchange flow</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total ERC20 exchange funds flow</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Transaction volume</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total circulation (beta)</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Velocity of tokens (beta)</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">ETH gas used</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              Social data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Dev activity</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Topic search</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Relative social dominance</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total social volume</th>
                <td className="py-5 pe-4">
                  {/* Minus */}
                  <svg className="shrink-0 ms-auto size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  {/* Minus */}
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <div className="px-4 mb-4">
            <h2 className="text-lg leading-6 font-medium text-foreground">Enterprise</h2>
          </div>
          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              Financial data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Open/High/Low/Close</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Price-volume difference indicator</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              On-chain data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Network growth</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Average token age consumed</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Exchange flow</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total ERC20 exchange funds flow</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Transaction volume</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total circulation (beta)</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Velocity of tokens (beta)</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">ETH gas used</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full">
            <caption className="bg-muted border-t border-line-2 py-3 px-4 text-sm font-bold text-foreground text-start">
              Social data
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">Feature</th>
                <th className="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-line">
              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Dev activity</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Topic search</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Relative social dominance</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>

              <tr className="border-t border-table-line">
                <th className="py-5 px-4 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total social volume</th>
                <td className="py-5 pe-4">
                  {/* Check */}
                  <svg className="shrink-0 ms-auto size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {/* End Solid Check */}
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      {/* End xs to lg */}

      {/* lg+ */}
      <div className="hidden lg:block">
        <table className="w-full h-px">
          <caption className="sr-only">
            Pricing plan comparison
          </caption>
          <thead className="sticky top-0 inset-x-0 bg-layer">
            <tr>
              <th className="py-4 ps-6 pe-6 text-sm font-medium text-foreground text-start" scope="col">
                <span className="sr-only">Feature by</span>
                <span className="text-foreground">Plans</span>
              </th>

              <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-foreground text-center" scope="col">Free</th>
              <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-foreground text-center" scope="col">Startup</th>
              <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-foreground text-center" scope="col">Team</th>
              <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-foreground text-center" scope="col">Enterprise</th>
            </tr>
          </thead>
          <tbody className="border-t border-table-line divide-y divide-table-line">
            <tr>
              <th className="py-3 ps-6 bg-muted font-bold text-foreground text-start" colspan="5" scope="colgroup">Financial data</th>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Open/High/Low/Close</th>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Price-volume difference indicator</th>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* Minus */}
                <span className="sr-only">Not included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-3 ps-6 bg-muted font-bold text-foreground text-start" colspan="5" scope="colgroup">On-chain data</th>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Network growth</th>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Average token age consumed</th>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Not included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Exchange flow</th>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* Minus */}
                <span className="sr-only">Not included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total ERC20 exchange funds flow</th>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* Minus */}
                <span className="sr-only">Not included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Transaction volume</th>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Total circulation (beta)</th>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* Minus */}
                <span className="sr-only">Not included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Velocity of tokens (beta)</th>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Not included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">ETH gas used</th>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* Minus */}
                <span className="sr-only">Not included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-3 ps-6 bg-muted font-bold text-foreground text-start" colspan="5" scope="colgroup">Social data</th>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Dev activity</th>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* Minus */}
                <span className="sr-only">Included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Topic search</th>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Relative social dominance</th>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* Minus */}
                <span className="sr-only">Included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* Minus */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* Minus */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Minus */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* Minus */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th className="py-5 ps-6 pe-6 text-sm font-normal text-muted-foreground-2 text-start whitespace-nowrap" scope="row">Relative social dominance</th>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Free</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Startup</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Team</span>
              </td>

              <td className="py-5 px-6">
                {/* Check */}
                <svg className="mx-auto shrink-0 size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {/* End Solid Check */}
                <span className="sr-only">Included in Enterprise</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* End lg+ */}
    </div>

    <div className="text-center mt-12">
      <button type="button" className="hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none" id="hs-pricing-comparison" aria-expanded="false" aria-controls="hs-pricing-comparison-content" data-hs-collapse="#hs-pricing-comparison-content">
        <span className="hs-collapse-open:hidden block">View pricing comparison</span>
        <span className="hs-collapse-open:block hidden">Hide pricing comparison</span>
        <svg className="hs-collapse-open:rotate-180 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </div>
  </div>
  {/* End Comparison table */}
</div>
{/* End Pricing */}
    </div>
  )
}

export default pricing