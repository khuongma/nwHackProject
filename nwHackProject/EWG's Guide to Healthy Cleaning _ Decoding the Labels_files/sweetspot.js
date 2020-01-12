function transactionFilter(message) {
    if (message
        && message.ecommerce
        && message.ecommerce.purchase
        && message.ecommerce.purchase.actionField) {

        if (window.sweetSpotEnabled) {
            message.ecommerce.purchase.actionField.coupon = 'SweetSpot';
        }

        if (message.ecommerce.purchase.products) {
            for (var j = 0; j < message.ecommerce.purchase.products.length; j++) {
                var product = message.ecommerce.purchase.products[j];

                if (product.brand) {
                    product.id = product.brand.toString() + '_' + product.id.toString();
                }

                if (product.price) {
                    product.id = product.id.toString() + '_' + product.price.toString();
                }

                if (product.name) {
                    product.id = product.id.toString() + '_' + product.name;
                }

                product.name = product.id;

                if (window.sweetSpotEnabled) {
                    product.id = product.id + '_SweetSpot';
                    product.coupon = 'SweetSpot';
                    product.variant = 'SweetSpot';
                }
            }
        }
    }
    return message;
}

window.dataLayer = window.dataLayer || [];

var oldPush = window.dataLayer.push;
window.dataLayer.push = function () {
    var states = [].slice.call(arguments, 0);
    for (var i = 0; i < states.length; i++) {
        transactionFilter(states[i]);
    }
    oldPush.apply(dataLayer, states);
};

(function () {
    try {
        var amts = [1, 2, 3, 4, 5, 8, 10, 15, 20, 25, 27, 30, 35, 40, 50, 75, 100, 150, 200, 250, 300, 500, 1000, 2000, 2100, 2200, 2250, 2300, 2400, 2500],
            enabler,
            randomSampleRate = 0;

        window.sweetSpotEnabled = false;

        if(/[?&]ss=/.test(location.search) || (Math.random() < randomSampleRate)) {
          init();
        }

        if(window.formview && window.formview.form_definition && window.formview.form_definition().isSweetSpotEnabled)
        {
            init();
        }

        window.nvtag_callbacks = window.nvtag_callbacks || [];
        window.nvtag_callbacks.preSegue = window.nvtag_callbacks.preSegue || [];
        window.nvtag_callbacks.preSegue.push(preSegue);

        window.nvtag_callbacks.alterFormDefinition = window.nvtag_callbacks.alterFormDefinition || [];
        window.nvtag_callbacks.alterFormDefinition.push(alterFormDefinition);

        function alterFormDefinition(args) {
            if(args.form_definition
            && args.form_definition.isSweetSpotEnabled
            && !window.sweetSpotEnabled
            && !enabler) {
                init();
            }
        }

        function init() {
            enabler = setInterval(enable, 25);
        }

        function preSegue(args) {
            try {
                //console.log('\n\npreSegue()');
                //console.log(arguments);
                var dataLayer = window.dataLayer || [];
                var ecommerce;
                if (window.sweetSpotEnabled && args.response.contributionAmount) {
                    trackTransaction(args.response.contributionAmount);
                    for (var i = 0; i < dataLayer.length; i++) {
                        var d = dataLayer[i];
                        if (d && d.ecommerce && d.ecommerce.purchase && d.ecommerce.purchase.products) {
                            ecommerce = d;
                            d.ecommerce.purchase.actionField.coupon = 'SweetSpot';

                            for (var j = 0; j < d.ecommerce.purchase.products.length; j++) {
                                var p = d.ecommerce.purchase.products[j];
                                p.variant = 'SweetSpot'
                                p.coupon = 'SweetSpot'
                            }

                            break;
                        }
                    }

                    if(ecommerce)
                    {
                      dataLayer.push(ecommerce); // repush, so which adds the variant
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        }


        function enable() {
            try {
                if (window.sweetSpotEnabled) {
                    clearInterval(enabler);
                    return;
                }

                var ss = getSweetSpotAmount();

                if (ss && window.formview && window.formview.subviews && window.formview.subviews.ContributionInformation) {
                    track();
                    alterOptions(ss);
                    var sa = window.formview.subviews.ContributionInformation.subviews.SelectAmount;
                    sa.render();
                    sa.$el.find(":radio:first").click();
                    window.sweetSpotEnabled = true;
                }
            }
            catch (e) {
                console.log(e);
                clearInterval(enabler);
            }
        }

        function trackTransaction(amt) {
            if (window.nvtag && window.nvtag.track) {
                nvtag.track('ContributionForm', 'Form Submit', 'SweetSpot', amt);
            }
        }

        function track() {
            setTimeout(function () {
                if (window.nvtag && window.nvtag.track) {
                    nvtag.track('ContributionForm', 'Form Load', 'SweetSpot')
                }
            }, 1000);
        }

        function getOptionByIndex(start, n) {
            for (var i = 0; i < amts.length; i++) {
                if ((amts[i] >= start) && amts[i + n]) {
                    return amts[i + n];
                }
            }
            return null;
        }

        function alterOptions(sweetspot) {
            var def = window.formview.options.form_definition;
            var sa = getSelectAmountNode(def);
            var options = sa.options;
            var valueMin = sa.valueMin || 0;
            var valueMax = sa.valueMax || 999999.99;

            for (var j = 0; j < options.length-1; j++) {
                var o = options[j];

                var newOption = getOptionByIndex(sweetspot, j);
                if (newOption && newOption >= valueMin && newOption <= valueMax) {
                    o.val = newOption.toString();
                    o.label = '$' + o.val;
                    o.display = o.label;
                }
            }
        }

        function getSweetSpotAmount() {
            var ss = null;
            if (window.nvtag && window.nvtag.data) {
                if (window.nvtag.data.profile
                    && window.nvtag.data.profile.attributes
                    && window.nvtag.data.profile.attributes.SweetSpot)
                {
                    ss = window.nvtag.data.profile.attributes.SweetSpot;
                }
                if (window.nvtag.data.fast
                    && window.nvtag.data.fast.attributes
                    && window.nvtag.data.fast.attributes.SweetSpot) {
                    if (window.nvtag.data.fast.attributes.SweetSpot
                        && window.nvtag.data.fast.attributes.SweetSpot > ss) {
                        ss = window.nvtag.data.fast.attributes.SweetSpot;
                    }
                }
            }
            return ss;
        }

        function getSelectAmountNode(def) {
            for (var i = 0; i < def.form_elements.length; i++) {
                var ci = def.form_elements[i];
                if (ci.name === "ContributionInformation") {
                    for (var j = 0; j < ci.children.length; j++) {
                        if (ci.children[j].name === 'SelectAmount') {
                            return ci.children[j];
                        }
                    }
                }
            }
            return null;
        }
    }
    catch (e) {
        console.log(e);
    }
})();