<?php
namespace AllPurposeCovers\NewsletterPopup\Block;

use Magento\Framework\View\Element\Template;

class Popup extends Template
{
    // You can add methods here if you want to pass data to the template

    public function getMessageBlock()
    {
        return $this->getLayout()->getBlock('global_messages');
    }
} 