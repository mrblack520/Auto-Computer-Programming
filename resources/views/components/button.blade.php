<button {{ $attributes->merge(['type' => 'submit', 'class' => ' border-0  bg-transparent']) }}>
    {{ $slot }}
</button>
