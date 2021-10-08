<template>
  <!-- New Workout form -->
    <div class="section">
        <div class="container">
            <form action="" class="form">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Workout Title">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Location</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Workout Title">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Time</label>
                    <div class="control">
                        <input class="input" type="time" placeholder="Workout Title">
                    </div>
                </div>
    
    
                <div class="field">
                    <label class="label">Type</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>Cardio</option>
                                <option>Strength</option>
                            </select>
                        </div>
                    </div>
                </div>
    
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="textarea"></textarea>
                    </div>
                </div>
    
                <div class="field file is-boxed">
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume">
                        <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                Upload Photo
                            </span>
                        </span>
                    </label>
                </div>
    
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>