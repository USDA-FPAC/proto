<template>
  <div>
    <div class="fds-m-t--m fds-m-b--l fds-level fds-level--justify-between">
      <div class="fds-level">
        <span class="fds-text-size--3">Year: </span>
        <span>
          <select class="fds-select fds-field__item" id="UNIQUE-ID-year" aria-describedby="year-help" aria-required="true" name="UNIQUE-ID-year">
            <option value="x" selected="">Select One</option>
            <option value="2020">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </span>
      </div>
      <div><span class="fds-text-size--3">State: <strong><span class="fds-text-allcaps">South Dakota (46)</span></strong></span></div>
      <div><span class="fds-text-size--3">County: <strong><span class="fds-text-allcaps">Codington (029)</span></strong></span></div>
      <div><button class="fds-btn fds-btn--secondary">Change Selection</button></div>
    </div>

    <table class="fds-table fds-table--borderless">
						<caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
						<thead>
							<tr>
								<th scope="col">Select</th>
								<th scope="col"><button class="fds-table__sort" type="button">LDP Number</button></th>
								<th scope="col" class="fds-text-align--right">Primary Contact</th>
								<th scope="col" class="fds-text-align--right">Commodity</th>
								<th scope="col" class="fds-text-align--right">LDP Type</th>
								<th scope="col" class="fds-text-align--right">Date</th>
								<th scope="col" class="fds-text-align--right">Status</th>
								<th scope="col" class="fds-text-align--right">Qty</th>
								<th scope="col" class="fds-text-align--right">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span>
							<input onclick="setApplication('DAVID D DAVISON', 542943)" class="fds-radio" id="r1" type="radio" name="group1" value="1">
							<label for="r1"></label>
						</span>
								</td>
								<td class="fds-text-align--right">542943</td>
								<td class="fds-text-align--right">DAVID D DAVISON</td>
								<td class="fds-text-align--right">Corn</td>
								<td class="fds-text-align--right">Sold/Fed/Delivered</td>
								<td class="fds-text-align--right">05/01/2020</td>
								<td class="fds-text-align--right"><span class="fds-label fds-label--success">DISBURSED</span></td>
								<td class="fds-text-align--right">223 BU</td>
								<td class="fds-text-align--right">$432.78</td>
							</tr>
							<tr>
								<td>
									<span>
							<input onclick="setApplication('JEREMY T WILSON', 593827)" class="fds-radio" id="r2" type="radio" name="group1" value="2">
							<label for="r2"></label>
						</span>
								</td>
								<td class="fds-text-align--right">593827</td>
								<td class="fds-text-align--right">JEREMY T WILSON</td>
								<td class="fds-text-align--right">Flax</td>
								<td class="fds-text-align--right">Farm Stored</td>
								<td class="fds-text-align--right">8/15/2020</td>
								<td class="fds-text-align--right"><span class="fds-label fds-label--success">DISBURSED</span></td>
								<td class="fds-text-align--right">487 BU</td>
								<td class="fds-text-align--right">$1,290.45</td>
							</tr>
						</tbody>
					</table>

          <div class="fds-m-t--l fds-level">
						<button class="fds-btn fds-btn--secondary" type="button">
							Select Application
						</button>
						<button disabled="disabled" class="fds-btn fds-btn--secondary" type="button">
							New Application
						</button>
					</div>

  </div>
</template>